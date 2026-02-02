// Import API configuration from config module
import { pythonURI, fetchOptions } from './config.js';

/**
 * Gemini AI API Module
 * Provides reusable functions for interacting with Gemini AI endpoints
 *
 * PROGRAMMING CONSTRUCTS USED:
 * - Sequencing: Promise chains execute fetch -> validate -> parse in order
 * - Selection: if/else handles errors, response formats, and parse modes
 * - Iteration: (implicit in Promise chain processing)
 * - Lists: requestOptions object stores fetch configuration
 */

/**
 * Send a prompt to Gemini AI and get response
 * @param {Object} options - Configuration object
 * @param {string} options.prompt - The AI prompt/instruction
 * @param {string} options.text - The user input text to process
 * @param {string} [options.endpoint='/api/gemini'] - API endpoint
 * @param {boolean} [options.parseJSON=false] - Whether to parse response as JSON
 * @returns {Promise} - Returns promise for chaining
 */
// Sends a prompt to the Gemini AI backend and returns the response
export function queryGemini(options) {
    // Sequencing: Destructure options to extract parameters
    const {
        prompt,
        text,
        endpoint = '/api/gemini',
        parseJSON = false
    } = options;

    // Selection: Validate that required parameters are provided
    if (!prompt || !text) {
        return Promise.reject(new Error('Both prompt and text parameters are required'));
    }

    // Sequencing: Build the full API URL
    const URL = pythonURI + endpoint;

    // List: Create request configuration object
    const requestOptions = {
        ...fetchOptions,
        method: 'POST',
        body: JSON.stringify({
            prompt: prompt,
            text: text
        })
    };

    // Sequencing: Execute fetch, then process response, then parse data
    return fetch(URL, requestOptions)
        .then(response => {
            // Selection: Check if HTTP response was successful
            if (!response.ok) {
                return response.text().then(text => {
                    throw new Error(`HTTP ${response.status}: ${text}`);
                });
            }
            return response.json();
        })
        .then(data => {
            // Selection: Handle API-level errors before parsing
            if (data.error || (data.message && !data.success)) {
                let errorMsg = data.error || data.message || "Unknown error";
                
                // Add error code if present
                if (data.error_code) {
                    errorMsg += ` (Error ${data.error_code})`;
                }
                
                // Special handling for authentication errors
                if (data.message && data.message.includes("Authentication")) {
                    errorMsg += " (Login required)";
                }
                
                throw new Error(errorMsg);
            }
            
            // For C4-style responses: Check for successful response with content
            if (data.hasOwnProperty('success') && (!data.success || !data.text)) {
                throw new Error("No clear analysis provided by the backend");
            }
            
            // Conditionally parse JSON based on parseJSON parameter
            if (parseJSON) {
                return parseGeminiResponse(data);
            } else {
                // Return raw data for text/markdown responses (C4 style)
                return data;
            }
        });
}

/**
 * Parse Gemini AI response and extract JSON data
 * Handles various response formats and strips markdown code blocks
 * @param {Object} data - Raw response data from Gemini API
 * @returns {Object} - Parsed JSON object
 */
// Parses Gemini response and extracts JSON, handling different response formats
export function parseGeminiResponse(data) {
    try {
        // Selection: Case 1 - Response wrapped in 'response' field
        if (data.response) {
            let responseText = typeof data.response === 'string' 
                ? data.response 
                : JSON.stringify(data.response);
            
            // Strip markdown code blocks
            responseText = responseText.replace(/```json\s*|\s*```/g, '').trim();
            return JSON.parse(responseText);
        }
        // Case 2: Response in 'text' field
        else if (data.text) {
            let responseText = data.text;
            // Strip markdown code blocks
            responseText = responseText.replace(/```json\s*|\s*```/g, '').trim();
            return JSON.parse(responseText);
        }
        // Case 3: Return data as-is if it already has expected structure
        else {
            return data;
        }

    } catch (parseError) {
        console.error('Failed to parse Gemini response:', parseError);
        throw new Error('AI response was not in expected JSON format');
    }
}