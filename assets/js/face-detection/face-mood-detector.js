/**
 * Face Mood Detector Module
 * Handles camera access, face detection, and expression analysis using face-api.js
 *
 * PROGRAMMING CONSTRUCTS USED:
 * - Sequencing: Async/await ensures code runs in order (initialize -> startCamera -> detect)
 * - Selection: if/else statements validate camera support, face detection, and errors
 * - Iteration: forEach loop stops camera tracks; reduce finds largest face
 * - Lists: ERROR_CODES object stores error types; detections array holds detected faces
 */

// List: Error codes for different detection failure scenarios
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

// Class that handles face detection and mood analysis from camera feed
export class FaceMoodDetector {
  // Constructor initializes video/canvas elements and configuration options
  constructor(videoElement, canvasElement, options = {}) {
    this.video = videoElement;
    this.canvas = canvasElement;
    this.stream = null;
    this.modelsLoaded = false;

    // Sequencing: Set default options then override with user-provided options
    this.options = {
      modelPath: options.modelPath || 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/',
      minConfidence: options.minConfidence || 0.3,
      minFaceSize: options.minFaceSize || 128,
      ...options
    };
  }

  /**
   * Check if browser supports camera access
   * @returns {Object} { supported, message }
   */
  static checkBrowserSupport() {
    // Selection: Check if browser has camera API support
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      return {
        supported: false,
        message: 'Camera access not supported in this browser'
      };
    }
    return { supported: true };
  }

  /**
   * Initialize face-api.js models
   * @param {Function} progressCallback - Optional callback for loading progress
   * @returns {Promise<Object>} { success, error }
   */
  async initialize(progressCallback) {
    try {
      // Check if face-api is available
      if (typeof faceapi === 'undefined') {
        return {
          success: false,
          error: ERROR_CODES.MODELS_NOT_LOADED,
          message: 'face-api.js library not loaded'
        };
      }

      // Load models (tiny face detector for speed + expression model)
      if (progressCallback) progressCallback('Loading face detection models...', 0);

      await faceapi.nets.tinyFaceDetector.loadFromUri(this.options.modelPath);
      if (progressCallback) progressCallback('Face detection ready...', 50);

      await faceapi.nets.faceExpressionNet.loadFromUri(this.options.modelPath);
      if (progressCallback) progressCallback('Expression detection ready...', 100);

      this.modelsLoaded = true;

      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: ERROR_CODES.MODELS_NOT_LOADED,
        message: `Failed to load models: ${error.message}`
      };
    }
  }

  /**
   * Start camera stream
   * @returns {Promise<Object>} { success, error, message }
   */
  async startCamera() {
    try {
      // Check browser support first
      const browserSupport = FaceMoodDetector.checkBrowserSupport();
      if (!browserSupport.supported) {
        return {
          success: false,
          error: ERROR_CODES.BROWSER_NOT_SUPPORTED,
          message: browserSupport.message
        };
      }

      // Request camera access with constraints
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640 },
          height: { ideal: 480 },
          facingMode: 'user'
        },
        audio: false
      });

      // Attach stream to video element
      this.video.srcObject = this.stream;

      // Wait for video to be ready
      await new Promise((resolve) => {
        this.video.onloadedmetadata = () => {
          this.video.play();
          resolve();
        };
      });

      // Set canvas dimensions to match video
      this.canvas.width = this.video.videoWidth;
      this.canvas.height = this.video.videoHeight;

      return { success: true };
    } catch (error) {
      const isDenied = error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError';

      return {
        success: false,
        error: isDenied ? ERROR_CODES.PERMISSION_DENIED : ERROR_CODES.CAMERA_ERROR,
        message: isDenied
          ? 'Camera permission denied. Please allow camera access in your browser settings.'
          : `Camera error: ${error.message}`
      };
    }
  }

  /**
   * Detect face and expression in current video frame
   * @returns {Promise<Object>} { success, detection, expressions, error, message }
   */
  async detectExpression() {
    if (!this.modelsLoaded) {
      return {
        success: false,
        error: ERROR_CODES.MODELS_NOT_LOADED,
        message: 'Models not loaded. Call initialize() first.'
      };
    }

    try {
      // Detect all faces with expressions
      const detections = await faceapi
        .detectAllFaces(this.video, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      // Clear canvas
      const ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Check if any faces detected
      if (!detections || detections.length === 0) {
        return {
          success: false,
          error: ERROR_CODES.NO_FACE_DETECTED,
          message: 'No face detected. Please face the camera directly.'
        };
      }

      // Selection: Check for multiple faces
      if (detections.length > 1) {
        // Iteration: Use reduce to find the largest face (closest to camera)
        const largestFace = detections.reduce((max, current) => {
          const maxArea = max.detection.box.area;
          const currentArea = current.detection.box.area;
          return currentArea > maxArea ? current : max;
        });

        // Draw bounding box for largest face
        this.drawDetectionBox(largestFace.detection);

        return {
          success: true,
          detection: largestFace.detection,
          expressions: largestFace.expressions,
          warning: ERROR_CODES.MULTIPLE_FACES,
          message: 'Multiple faces detected. Using the closest one.'
        };
      }

      // Single face detected
      const detection = detections[0];

      // Check face size (too small = too far away)
      const faceBox = detection.detection.box;
      if (faceBox.width < this.options.minFaceSize || faceBox.height < this.options.minFaceSize) {
        return {
          success: false,
          error: ERROR_CODES.FACE_TOO_SMALL,
          message: 'Face too small. Please move closer to the camera.'
        };
      }

      // Check detection confidence (poor lighting or unclear face)
      if (detection.detection.score < this.options.minConfidence) {
        return {
          success: false,
          error: ERROR_CODES.POOR_LIGHTING,
          message: 'Unclear face detection. Try improving lighting or adjusting camera angle.'
        };
      }

      // Draw bounding box
      this.drawDetectionBox(detection.detection);

      return {
        success: true,
        detection: detection.detection,
        expressions: detection.expressions
      };
    } catch (error) {
      return {
        success: false,
        error: ERROR_CODES.CAMERA_ERROR,
        message: `Detection error: ${error.message}`
      };
    }
  }

  /**
   * Draw detection bounding box on canvas
   * @param {Object} detection - face-api detection object
   */
  drawDetectionBox(detection) {
    const ctx = this.canvas.getContext('2d');
    const box = detection.box;

    // Draw box
    ctx.strokeStyle = '#4eff9e';
    ctx.lineWidth = 3;
    ctx.strokeRect(box.x, box.y, box.width, box.height);

    // Draw confidence score
    ctx.fillStyle = '#4eff9e';
    ctx.font = '16px Arial';
    ctx.fillText(
      `${Math.round(detection.score * 100)}%`,
      box.x,
      box.y > 20 ? box.y - 5 : box.y + box.height + 20
    );
  }

  /**
   * Capture current video frame to image
   * @returns {string} Base64 data URL of captured image
   */
  captureFrame() {
    const captureCanvas = document.createElement('canvas');
    captureCanvas.width = this.video.videoWidth;
    captureCanvas.height = this.video.videoHeight;

    const ctx = captureCanvas.getContext('2d');
    ctx.drawImage(this.video, 0, 0);

    return captureCanvas.toDataURL('image/jpeg', 0.9);
  }

  /**
   * Stop camera stream
   */
  // Stops the camera and releases all media resources
  stopCamera() {
    if (this.stream) {
      // Iteration: Loop through each track and stop it
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }

    if (this.video.srcObject) {
      this.video.srcObject = null;
    }
  }

  /**
   * Cleanup all resources
   */
  cleanup() {
    this.stopCamera();

    // Clear canvas
    if (this.canvas) {
      const ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}
