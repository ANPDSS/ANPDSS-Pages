/**
 * Face Mood Detector Module
 *
 * This module provides face detection and mood/expression analysis using
 * the face-api.js library. It handles camera access, face detection, and
 * expression recognition to determine a user's emotional state.
 *
 * CollegeBoard Programming Constructs:
 * - Sequencing: Step-by-step flow (initialize -> startCamera -> detect -> analyze)
 * - Selection: if/else for validation, error handling, face size checks
 * - Iteration: forEach to stop camera tracks, reduce to find largest face
 * - Lists: ERROR_CODES object, detections array of detected faces
 */

// LIST: Error codes for different detection scenarios
// This object stores all possible error types that can occur during face detection.
// Using constants prevents typos and makes error handling consistent throughout the app.
export const ERROR_CODES = {
  NO_FACE_DETECTED: 'NO_FACE_DETECTED',         // No face visible in camera frame
  FACE_TOO_SMALL: 'FACE_TOO_SMALL',             // User is too far from camera
  UNCLEAR_EXPRESSION: 'UNCLEAR_EXPRESSION',     // Expression couldn't be determined
  POOR_LIGHTING: 'POOR_LIGHTING',               // Low confidence due to bad lighting
  PERMISSION_DENIED: 'PERMISSION_DENIED',       // User denied camera access
  CAMERA_ERROR: 'CAMERA_ERROR',                 // General camera hardware/software error
  MULTIPLE_FACES: 'MULTIPLE_FACES',             // More than one face detected (warning)
  MODELS_NOT_LOADED: 'MODELS_NOT_LOADED',       // AI models haven't been loaded yet
  BROWSER_NOT_SUPPORTED: 'BROWSER_NOT_SUPPORTED' // Browser doesn't support camera API
};

/**
 * FaceMoodDetector Class
 *
 * Main class that handles all face detection and expression analysis.
 * It connects to the user's webcam, processes video frames using AI models,
 * and returns detected expressions (happy, sad, angry, surprised, etc.)
 */
export class FaceMoodDetector {
  /**
   * Constructor - initializes the detector with required elements and settings
   *
   * @param {HTMLVideoElement} videoElement - The video element to display camera feed
   * @param {HTMLCanvasElement} canvasElement - Canvas overlay for drawing detection boxes
   * @param {Object} options - Optional configuration settings
   */
  constructor(videoElement, canvasElement, options = {}) {
    // Store references to the DOM elements we'll be working with
    this.video = videoElement;    // Video element shows the live camera feed
    this.canvas = canvasElement;  // Canvas overlays the video to draw face boxes
    this.stream = null;           // Will hold the camera MediaStream once started
    this.modelsLoaded = false;    // Flag to track if AI models are ready

    // Merge user options with defaults using spread operator
    // This allows users to customize behavior while having sensible defaults
    this.options = {
      modelPath: options.modelPath || 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/',  // Where to load AI models from
      minConfidence: options.minConfidence || 0.3,   // Minimum 30% confidence to accept a detection
      minFaceSize: options.minFaceSize || 128,       // Face must be at least 128x128 pixels
      ...options  // Include any additional options passed in
    };
  }

  /**
   * Static method to check if the browser supports camera access
   *
   * SELECTION: Uses if/else to return different results based on browser capabilities.
   * Static means this can be called without creating an instance: FaceMoodDetector.checkBrowserSupport()
   *
   * @returns {Object} - Object with 'supported' boolean and optional 'message'
   */
  static checkBrowserSupport() {
    // Check if the browser has the mediaDevices API (modern camera access)
    // navigator.mediaDevices is undefined in older browsers or non-secure contexts
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      return { supported: false, message: 'Camera access not supported in this browser' };
    }
    return { supported: true };
  }

  /**
   * Initialize the face detection AI models
   *
   * SEQUENCING: Loads models in a specific order - face detection first, then expressions.
   * This is async because loading models from a CDN takes time.
   *
   * @param {Function} progressCallback - Optional function called with progress updates
   * @returns {Object} - Result object with success status and any error details
   */
  async initialize(progressCallback) {
    try {
      // Step 1: Verify the face-api.js library is loaded in the page
      // 'faceapi' is a global variable created when the library script is included
      if (typeof faceapi === 'undefined') {
        return { success: false, error: ERROR_CODES.MODELS_NOT_LOADED, message: 'face-api.js library not loaded' };
      }

      // Step 2: Load the TinyFaceDetector model
      // This is a lightweight neural network that finds faces in images
      // loadFromUri fetches the model files from the CDN
      if (progressCallback) progressCallback('Loading face detection models...', 0);
      await faceapi.nets.tinyFaceDetector.loadFromUri(this.options.modelPath);

      // Step 3: Load the FaceExpressionNet model
      // This neural network analyzes a face and outputs emotion probabilities
      // (happy, sad, angry, fearful, disgusted, surprised, neutral)
      if (progressCallback) progressCallback('Face detection ready...', 50);
      await faceapi.nets.faceExpressionNet.loadFromUri(this.options.modelPath);

      // Step 4: Mark initialization as complete
      // This flag is checked before running detection to ensure models are ready
      if (progressCallback) progressCallback('Expression detection ready...', 100);
      this.modelsLoaded = true;

      return { success: true };
    } catch (error) {
      // If any step fails (network error, invalid model files, etc.), return error
      return { success: false, error: ERROR_CODES.MODELS_NOT_LOADED, message: `Failed to load models: ${error.message}` };
    }
  }

  /**
   * Start the webcam and connect it to the video element
   *
   * SEQUENCING + SELECTION: Multiple steps that must happen in order,
   * with error handling branching at each step.
   *
   * @returns {Object} - Result object with success status and any error details
   */
  async startCamera() {
    try {
      // Step 1: Check if this browser supports camera access
      const browserSupport = FaceMoodDetector.checkBrowserSupport();
      if (!browserSupport.supported) {
        return { success: false, error: ERROR_CODES.BROWSER_NOT_SUPPORTED, message: browserSupport.message };
      }

      // Step 2: Request camera permission and get video stream
      // getUserMedia prompts the user for permission if not already granted
      // We request specific video settings: 640x480 resolution, front-facing camera
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' },
        audio: false  // We don't need audio for face detection
      });

      // Step 3: Connect the camera stream to our video element
      // srcObject is the modern way to attach a MediaStream to a video element
      this.video.srcObject = this.stream;

      // Step 4: Wait for the video to be ready before continuing
      // onloadedmetadata fires when video dimensions and duration are available
      // We wrap this in a Promise so we can use await
      await new Promise((resolve) => {
        this.video.onloadedmetadata = () => {
          this.video.play();  // Start playing the video
          resolve();          // Signal that setup is complete
        };
      });

      // Step 5: Match the canvas size to the video size
      // This ensures our face detection boxes align correctly with the video
      this.canvas.width = this.video.videoWidth;
      this.canvas.height = this.video.videoHeight;

      return { success: true };
    } catch (error) {
      // SELECTION: Handle different types of camera errors differently
      // NotAllowedError occurs when user clicks "Block" on the permission prompt
      const isDenied = error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError';
      return {
        success: false,
        error: isDenied ? ERROR_CODES.PERMISSION_DENIED : ERROR_CODES.CAMERA_ERROR,
        message: isDenied ? 'Camera permission denied. Please allow camera access.' : `Camera error: ${error.message}`
      };
    }
  }

  /**
   * Run face detection on the current video frame
   *
   * LISTS + ITERATION + SELECTION: This is the core detection function.
   * It processes the video frame, finds faces, analyzes expressions,
   * and handles various edge cases.
   *
   * @returns {Object} - Detection result with expressions or error information
   */
  async detectExpression() {
    // Guard clause: Make sure models are loaded before trying to detect
    if (!this.modelsLoaded) {
      return { success: false, error: ERROR_CODES.MODELS_NOT_LOADED, message: 'Models not loaded. Call initialize() first.' };
    }

    try {
      // LIST: Run face detection on the current video frame
      // detectAllFaces() returns an array of all faces found in the image
      // withFaceExpressions() adds emotion analysis to each detected face
      // TinyFaceDetectorOptions uses the lightweight model we loaded earlier
      const detections = await faceapi
        .detectAllFaces(this.video, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      // Get the canvas 2D drawing context and clear any previous drawings
      // This removes the face box from the previous frame
      const ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // SELECTION: Check if any faces were found
      if (!detections || detections.length === 0) {
        return { success: false, error: ERROR_CODES.NO_FACE_DETECTED, message: 'No face detected. Please face the camera directly.' };
      }

      // SELECTION: Handle the case where multiple faces are detected
      if (detections.length > 1) {
        // ITERATION: Use reduce() to find the largest face in the detections array
        // reduce() iterates through the array, comparing each face to find the max
        // We assume the largest face is the main user (closest to camera)
        const largestFace = detections.reduce((max, current) => {
          const maxArea = max.detection.box.area;         // Area of current largest
          const currentArea = current.detection.box.area; // Area of face being checked
          return currentArea > maxArea ? current : max;   // Keep the bigger one
        });

        // Draw a box around the selected face
        this.drawDetectionBox(largestFace.detection);

        // Return success but include a warning about multiple faces
        return {
          success: true,
          detection: largestFace.detection,
          expressions: largestFace.expressions,
          warning: ERROR_CODES.MULTIPLE_FACES,
          message: 'Multiple faces detected. Using the closest one.'
        };
      }

      // Single face detected - this is the ideal case
      const detection = detections[0];
      const faceBox = detection.detection.box;  // Get the bounding box around the face

      // SELECTION: Check if the face is large enough
      // Small faces mean the user is too far away for accurate expression detection
      if (faceBox.width < this.options.minFaceSize || faceBox.height < this.options.minFaceSize) {
        return { success: false, error: ERROR_CODES.FACE_TOO_SMALL, message: 'Face too small. Please move closer to the camera.' };
      }

      // SELECTION: Check the detection confidence score
      // Low confidence usually means poor lighting or partial face visibility
      // score is a value from 0 to 1 (0% to 100% confidence)
      if (detection.detection.score < this.options.minConfidence) {
        return { success: false, error: ERROR_CODES.POOR_LIGHTING, message: 'Unclear face detection. Try improving lighting.' };
      }

      // All checks passed - draw the detection box and return results
      this.drawDetectionBox(detection.detection);
      return { success: true, detection: detection.detection, expressions: detection.expressions };
    } catch (error) {
      // Catch any unexpected errors during detection
      return { success: false, error: ERROR_CODES.CAMERA_ERROR, message: `Detection error: ${error.message}` };
    }
  }

  /**
   * Draw a rectangle around the detected face on the canvas
   * Also displays the confidence percentage above the box
   *
   * @param {Object} detection - The detection object from face-api.js
   */
  drawDetectionBox(detection) {
    const ctx = this.canvas.getContext('2d');  // Get canvas drawing context
    const box = detection.box;                  // Get the face bounding box coordinates

    // Set up the box styling - green color (#4eff9e) with 3px line width
    ctx.strokeStyle = '#4eff9e';
    ctx.lineWidth = 3;

    // Draw the rectangle around the face
    // strokeRect draws just the outline (not filled)
    ctx.strokeRect(box.x, box.y, box.width, box.height);

    // Display the confidence percentage
    ctx.fillStyle = '#4eff9e';
    ctx.font = '16px Arial';

    // Position the text above the box if there's room, otherwise below
    // detection.score is 0-1, multiply by 100 for percentage
    ctx.fillText(`${Math.round(detection.score * 100)}%`, box.x, box.y > 20 ? box.y - 5 : box.y + box.height + 20);
  }

  /**
   * Capture the current video frame as a JPEG image
   * Creates a temporary canvas, draws the video frame, and exports as data URL
   *
   * @returns {string} - Base64-encoded JPEG image data URL
   */
  captureFrame() {
    // Create a temporary canvas element (not added to DOM)
    const captureCanvas = document.createElement('canvas');
    captureCanvas.width = this.video.videoWidth;
    captureCanvas.height = this.video.videoHeight;

    // Draw the current video frame onto the canvas
    const ctx = captureCanvas.getContext('2d');
    ctx.drawImage(this.video, 0, 0);

    // Export the canvas as a JPEG data URL with 90% quality
    // Format: "data:image/jpeg;base64,/9j/4AAQ..." (can be used as img src)
    return captureCanvas.toDataURL('image/jpeg', 0.9);
  }

  /**
   * Stop the camera and release resources
   *
   * ITERATION: Uses forEach to loop through all media tracks and stop each one.
   * MediaStreams can have multiple tracks (video, audio), so we stop them all.
   */
  stopCamera() {
    // Check if we have an active stream
    if (this.stream) {
      // getTracks() returns an array of all tracks in the stream
      // forEach iterates through each track and calls stop() on it
      // This releases the camera hardware
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;  // Clear the reference
    }

    // Disconnect the stream from the video element
    if (this.video.srcObject) {
      this.video.srcObject = null;
    }
  }

  /**
   * Full cleanup - stops camera and clears the canvas
   * Call this when the face detection feature is being closed/hidden
   */
  cleanup() {
    this.stopCamera();  // Stop the camera first

    // Clear any drawings from the canvas
    if (this.canvas) {
      const ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}
