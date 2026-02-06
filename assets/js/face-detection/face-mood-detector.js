/**
 * Face Mood Detector Module
 *
 * CollegeBoard Programming Constructs:
 * - Sequencing: Step-by-step flow (initialize -> startCamera -> detect -> analyze)
 * - Selection: if/else for validation, error handling, face size checks
 * - Iteration: forEach to stop camera tracks, reduce to find largest face
 * - Lists: ERROR_CODES object, detections array of detected faces
 */

// LIST: Error codes for different detection scenarios
export const ERROR_CODES = {
  NO_FACE_DETECTED: 'NO_FACE_DETECTED',
  FACE_TOO_SMALL: 'FACE_TOO_SMALL',
  UNCLEAR_EXPRESSION: 'UNCLEAR_EXPRESSION',
  POOR_LIGHTING: 'POOR_LIGHTING',
  PERMISSION_DENIED: 'PERMISSION_DENIED',
  CAMERA_ERROR: 'CAMERA_ERROR',
  MULTIPLE_FACES: 'MULTIPLE_FACES',
  MODELS_NOT_LOADED: 'MODELS_NOT_LOADED',
  BROWSER_NOT_SUPPORTED: 'BROWSER_NOT_SUPPORTED'
};

export class FaceMoodDetector {
  constructor(videoElement, canvasElement, options = {}) {
    this.video = videoElement;
    this.canvas = canvasElement;
    this.stream = null;
    this.modelsLoaded = false;
    this.options = {
      modelPath: options.modelPath || 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/',
      minConfidence: options.minConfidence || 0.3,
      minFaceSize: options.minFaceSize || 128,
      ...options
    };
  }

  // SELECTION: Check browser camera support
  static checkBrowserSupport() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      return { supported: false, message: 'Camera access not supported in this browser' };
    }
    return { supported: true };
  }

  // SEQUENCING: Load models step by step
  async initialize(progressCallback) {
    try {
      // Step 1: Check if face-api library exists
      if (typeof faceapi === 'undefined') {
        return { success: false, error: ERROR_CODES.MODELS_NOT_LOADED, message: 'face-api.js library not loaded' };
      }

      // Step 2: Load face detector model
      if (progressCallback) progressCallback('Loading face detection models...', 0);
      await faceapi.nets.tinyFaceDetector.loadFromUri(this.options.modelPath);

      // Step 3: Load expression model
      if (progressCallback) progressCallback('Face detection ready...', 50);
      await faceapi.nets.faceExpressionNet.loadFromUri(this.options.modelPath);

      // Step 4: Mark as ready
      if (progressCallback) progressCallback('Expression detection ready...', 100);
      this.modelsLoaded = true;

      return { success: true };
    } catch (error) {
      return { success: false, error: ERROR_CODES.MODELS_NOT_LOADED, message: `Failed to load models: ${error.message}` };
    }
  }

  // SEQUENCING + SELECTION: Start camera with error handling
  async startCamera() {
    try {
      // Step 1: Check browser support
      const browserSupport = FaceMoodDetector.checkBrowserSupport();
      if (!browserSupport.supported) {
        return { success: false, error: ERROR_CODES.BROWSER_NOT_SUPPORTED, message: browserSupport.message };
      }

      // Step 2: Request camera access
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' },
        audio: false
      });

      // Step 3: Attach stream to video
      this.video.srcObject = this.stream;

      // Step 4: Wait for video ready
      await new Promise((resolve) => {
        this.video.onloadedmetadata = () => {
          this.video.play();
          resolve();
        };
      });

      // Step 5: Set canvas dimensions
      this.canvas.width = this.video.videoWidth;
      this.canvas.height = this.video.videoHeight;

      return { success: true };
    } catch (error) {
      // SELECTION: Different error types
      const isDenied = error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError';
      return {
        success: false,
        error: isDenied ? ERROR_CODES.PERMISSION_DENIED : ERROR_CODES.CAMERA_ERROR,
        message: isDenied ? 'Camera permission denied. Please allow camera access.' : `Camera error: ${error.message}`
      };
    }
  }

  // LISTS + ITERATION + SELECTION: Main detection function
  async detectExpression() {
    if (!this.modelsLoaded) {
      return { success: false, error: ERROR_CODES.MODELS_NOT_LOADED, message: 'Models not loaded. Call initialize() first.' };
    }

    try {
      // LIST: Array of detected faces with expressions
      const detections = await faceapi
        .detectAllFaces(this.video, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      const ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // SELECTION: Check if any faces detected
      if (!detections || detections.length === 0) {
        return { success: false, error: ERROR_CODES.NO_FACE_DETECTED, message: 'No face detected. Please face the camera directly.' };
      }

      // SELECTION: Handle multiple faces
      if (detections.length > 1) {
        // ITERATION: Use reduce to find largest face in the list
        const largestFace = detections.reduce((max, current) => {
          const maxArea = max.detection.box.area;
          const currentArea = current.detection.box.area;
          return currentArea > maxArea ? current : max;
        });

        this.drawDetectionBox(largestFace.detection);
        return {
          success: true,
          detection: largestFace.detection,
          expressions: largestFace.expressions,
          warning: ERROR_CODES.MULTIPLE_FACES,
          message: 'Multiple faces detected. Using the closest one.'
        };
      }

      const detection = detections[0];
      const faceBox = detection.detection.box;

      // SELECTION: Check face size
      if (faceBox.width < this.options.minFaceSize || faceBox.height < this.options.minFaceSize) {
        return { success: false, error: ERROR_CODES.FACE_TOO_SMALL, message: 'Face too small. Please move closer to the camera.' };
      }

      // SELECTION: Check detection confidence
      if (detection.detection.score < this.options.minConfidence) {
        return { success: false, error: ERROR_CODES.POOR_LIGHTING, message: 'Unclear face detection. Try improving lighting.' };
      }

      this.drawDetectionBox(detection.detection);
      return { success: true, detection: detection.detection, expressions: detection.expressions };
    } catch (error) {
      return { success: false, error: ERROR_CODES.CAMERA_ERROR, message: `Detection error: ${error.message}` };
    }
  }

  drawDetectionBox(detection) {
    const ctx = this.canvas.getContext('2d');
    const box = detection.box;
    ctx.strokeStyle = '#4eff9e';
    ctx.lineWidth = 3;
    ctx.strokeRect(box.x, box.y, box.width, box.height);
    ctx.fillStyle = '#4eff9e';
    ctx.font = '16px Arial';
    ctx.fillText(`${Math.round(detection.score * 100)}%`, box.x, box.y > 20 ? box.y - 5 : box.y + box.height + 20);
  }

  captureFrame() {
    const captureCanvas = document.createElement('canvas');
    captureCanvas.width = this.video.videoWidth;
    captureCanvas.height = this.video.videoHeight;
    const ctx = captureCanvas.getContext('2d');
    ctx.drawImage(this.video, 0, 0);
    return captureCanvas.toDataURL('image/jpeg', 0.9);
  }

  // ITERATION: Loop through tracks to stop camera
  stopCamera() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }
    if (this.video.srcObject) {
      this.video.srcObject = null;
    }
  }

  cleanup() {
    this.stopCamera();
    if (this.canvas) {
      const ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}
