---
layout: post
title: "MoodLife - Outfit Generator"
description: "Get personalized outfit recommendations based on weather, time, and location"
permalink: /outfit-generator/
author: ANPDSS
date: 2025-12-05
categories: [CSP, MoodLife, Wellness]
tags: [outfit, weather, recommendations, daily-planning]
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MoodLife - Outfit Generator</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #000000 0%, #0a0a1a 100%);
      color: #ffffff;
      min-height: 100vh;
      overflow-x: hidden;
    }

    .top-nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(17, 17, 17, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 2px solid #2196F3;
      z-index: 1000;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      background: linear-gradient(45deg, #2196F3, #4eff9e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .nav-links {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .nav-btn {
      padding: 0.5rem 1rem;
      background: transparent;
      color: #2196F3;
      border: 1px solid #2196F3;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .nav-btn:hover {
      background: #2196F3;
      color: white;
      transform: translateY(-2px);
    }

    .container {
      max-width: 1200px;
      margin: 80px auto 2rem;
      padding: 2rem;
    }

    .card {
      background: rgba(17, 17, 17, 0.8);
      border: 1px solid #2a2a2a;
      border-radius: 16px;
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: 0 10px 40px rgba(33, 150, 243, 0.1);
      transition: all 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 50px rgba(33, 150, 243, 0.2);
    }

    .btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 1rem;
    }

    .btn-primary {
      background: linear-gradient(135deg, #2196F3, #1976D2);
      color: white;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(33, 150, 243, 0.4);
    }

    .btn-secondary {
      background: transparent;
      color: #2196F3;
      border: 2px solid #2196F3;
    }

    .btn-secondary:hover {
      background: rgba(33, 150, 243, 0.1);
    }

    input, select {
      width: 100%;
      padding: 0.75rem;
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid #333;
      border-radius: 8px;
      color: white;
      font-size: 1rem;
      margin: 0.5rem 0;
    }

    input:focus, select:focus {
      outline: none;
      border-color: #2196F3;
      box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.2);
    }

    .weather-display {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin: 1.5rem 0;
    }

    .weather-stat {
      background: rgba(33, 150, 243, 0.1);
      padding: 1rem;
      border-radius: 8px;
      text-align: center;
    }

    .weather-stat .icon {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    .weather-stat .label {
      color: #bbb;
      font-size: 0.9rem;
    }

    .weather-stat .value {
      font-size: 1.5rem;
      font-weight: bold;
      color: #2196F3;
    }

    .forecast-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }

    .forecast-card {
      background: rgba(11, 11, 11, 0.7);
      border: 1px solid #333;
      border-radius: 8px;
      padding: 1rem;
      text-align: center;
      transition: all 0.3s ease;
    }

    .forecast-card:hover {
      border-color: #2196F3;
      transform: translateY(-3px);
    }

    .forecast-card .time {
      color: #2196F3;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .forecast-card .icon {
      font-size: 2rem;
      margin: 0.5rem 0;
    }

    .forecast-card .temp {
      font-size: 1.2rem;
      font-weight: bold;
      color: #fff;
    }

    .forecast-card .desc {
      color: #bbb;
      font-size: 0.85rem;
      margin-top: 0.3rem;
    }

    .outfit-section {
      margin-top: 2rem;
    }

    .outfit-category {
      background: rgba(11, 11, 11, 0.9);
      border: 1px solid #2a2a2a;
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .outfit-category h3 {
      color: #4eff9e;
      margin-bottom: 1rem;
    }

    .outfit-items {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .outfit-item {
      padding: 0.5rem 1rem;
      background: rgba(33, 150, 243, 0.2);
      border: 1px solid #2196F3;
      border-radius: 20px;
      font-size: 0.9rem;
    }

    .loading {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 3px solid rgba(33, 150, 243, 0.3);
      border-radius: 50%;
      border-top-color: #2196F3;
      animation: spin 0.6s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .toast {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: linear-gradient(135deg, #4eff9e, #2196F3);
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
      box-shadow: 0 8px 25px rgba(78, 255, 158, 0.3);
      display: none;
      animation: slideInRight 0.3s ease;
      z-index: 3000;
    }

    .toast.show {
      display: block;
    }

    @keyframes slideInRight {
      from { transform: translateX(400px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }

    .hidden {
      display: none !important;
    }

    h2 {
      color: #2196F3;
      margin-bottom: 1rem;
    }

    h3 {
      color: #4eff9e;
      margin: 1rem 0;
    }

    .error-message {
      background: rgba(255, 74, 74, 0.2);
      border: 1px solid #ff4a4a;
      color: #ff4a4a;
      padding: 1rem;
      border-radius: 8px;
      margin: 1rem 0;
    }

    .success-message {
      background: rgba(78, 255, 158, 0.2);
      border: 1px solid #4eff9e;
      color: #4eff9e;
      padding: 1rem;
      border-radius: 8px;
      margin: 1rem 0;
    }

    @media (max-width: 768px) {
      .container {
        padding: 1rem;
        margin-top: 70px;
      }

      .top-nav {
        padding: 0.75rem 1rem;
      }

      .weather-display {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

  <nav class="top-nav">
    <div class="logo">👔 MoodLife Outfit</div>
    <div class="nav-links">
      <a href="/mood-meal1/" class="nav-btn">🏠 Home</a>
    </div>
  </nav>

  <div class="toast" id="toast"></div>

  <div class="container">

    <section class="card" style="text-align: center; padding: 3rem 2rem;">
      <h1 style="font-size: 2.5rem; margin-bottom: 1rem; background: linear-gradient(45deg, #2196F3, #4eff9e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        👔 Outfit Generator
      </h1>
      <p style="font-size: 1.1rem; color: #bbb; margin-bottom: 2rem;">
        Get personalized outfit recommendations based on your local weather and time of day
      </p>
    </section>

    <div class="card">
      <h2>📍 Your Location & Weather</h2>
      <p style="color: #bbb;">We'll use your location to get accurate weather data</p>

      <div id="location-status" style="margin: 1.5rem 0;">
        <p style="color: #bbb; margin-bottom: 1rem;">Click the button below to detect your location and get weather data.</p>
        <button class="btn btn-primary" style="width: 100%;" onclick="getLocation()">
          📍 Get My Location & Weather
        </button>
      </div>

      <div id="manual-location" class="hidden">
        <h3>Enter Your ZIP Code</h3>
        <p style="color: #bbb; margin-bottom: 1rem;">We couldn't detect your location automatically. Please enter your ZIP code:</p>
        <div style="display: flex; gap: 1rem;">
          <input type="text" id="zip-input" placeholder="Enter ZIP code (e.g., 92067)" maxlength="5">
          <button class="btn btn-primary" onclick="initiateGetWeatherByZip()">Get Weather</button>
        </div>
      </div>

      <div id="weather-container" class="hidden">
        <div class="success-message" id="location-found">
          <strong>✓ Location Found:</strong> <span id="location-name"></span>
        </div>

        <h3 style="margin-top: 1.5rem;">Current Weather</h3>
        <div class="weather-display">
          <div class="weather-stat">
            <div class="icon" id="weather-icon">🌤️</div>
            <div class="label">Condition</div>
            <div class="value" id="weather-condition">Clear</div>
          </div>
          <div class="weather-stat">
            <div class="icon">🌡️</div>
            <div class="label">Temperature</div>
            <div class="value" id="temperature">--°F</div>
          </div>
          <div class="weather-stat">
            <div class="icon">💧</div>
            <div class="label">Humidity</div>
            <div class="value" id="humidity">--%</div>
          </div>
          <div class="weather-stat">
            <div class="icon">💨</div>
            <div class="label">Wind Speed</div>
            <div class="value" id="wind-speed">-- mph</div>
          </div>
          <div class="weather-stat">
            <div class="icon">🕐</div>
            <div class="label">Time of Day</div>
            <div class="value" id="time-of-day">--</div>
          </div>
        </div>

        <h3 style="margin-top: 1.5rem;">Today's Forecast</h3>
        <div id="forecast-container" style="margin-top: 1rem;">
          <div class="loading"></div> Loading forecast...
        </div>

        <button class="btn btn-primary" style="width: 100%; margin-top: 1.5rem;" onclick="generateOutfit()">
          ✨ Generate Outfit Recommendation
        </button>
      </div>
    </div>

    <div id="outfit-recommendations" class="hidden">
      <div class="card">
        <h2>👔 Your Personalized Outfit</h2>
        <p style="color: #bbb; margin-bottom: 1.5rem;">Based on current weather and time of day</p>

        <div class="outfit-section">
          <div class="outfit-category">
            <h3>💡 General Advice</h3>
            <p id="general-advice" style="color: #ddd; line-height: 1.6;"></p>
          </div>

          <div class="outfit-category">
            <h3>👕 Clothing</h3>
            <div class="outfit-items" id="clothing-items"></div>
          </div>

          <div class="outfit-category">
            <h3>🎒 Accessories</h3>
            <div class="outfit-items" id="accessories-items"></div>
          </div>

          <div class="outfit-category">
            <h3>👟 Footwear</h3>
            <div class="outfit-items" id="footwear-items"></div>
          </div>
        </div>

        <button class="btn btn-secondary" style="width: 100%; margin-top: 1rem;" onclick="refreshWeather()">
          🔄 Refresh Weather & Get New Outfit
        </button>
      </div>
    </div>

  </div>

  <script>
    // ============================================
    // ERROR CONFIGURATION
    // ============================================
    const ERROR_TYPES = {
      WEATHER_FETCH_FAILED: 'WEATHER_FETCH_FAILED',
      FORECAST_FETCH_FAILED: 'FORECAST_FETCH_FAILED',
      INVALID_ZIP: 'INVALID_ZIP',
      HTTP_ERROR: 'HTTP_ERROR',
      NO_WEATHER_DATA: 'NO_WEATHER_DATA'
    };

    const ERROR_MESSAGES = {
      [ERROR_TYPES.WEATHER_FETCH_FAILED]: 'Could not get weather data. Please try again.',
      [ERROR_TYPES.FORECAST_FETCH_FAILED]: 'Could not load forecast data.',
      [ERROR_TYPES.INVALID_ZIP]: 'Please enter a valid 5-digit ZIP code.',
      [ERROR_TYPES.NO_WEATHER_DATA]: 'No weather data available. Please refresh.',
      DEFAULT: 'An unexpected error occurred.'
    };

    // ============================================
    // STATE & CONFIGURATION
    // ============================================
    const state = {
      weather: null,
      forecast: null,
      location: null,
      timeOfDay: null
    };

    const API_CONFIG = {
      baseURL: (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
        ? 'http://localhost:7'
        : 'https://moodlife.opencodingsociety.com',
      defaultHeaders: {
        'Content-Type': 'application/json',
        'X-Origin': 'client'
      }
    };

    // ============================================
    // VALIDATION
    // ============================================

    /** Single responsibility: validate ZIP code format */
    function validateZipCode(zip) {
      return zip && zip.length === 5 && /^\d{5}$/.test(zip);
    }

    // ============================================
    // API FETCH FUNCTIONS (each fetches ONE endpoint)
    // ============================================

    /** Single responsibility: fetch current weather by coordinates */
    async function fetchWeatherByCoords(lat, lon) {
      const url = `${API_CONFIG.baseURL}/api/outfit/weather/current?lat=${lat}&lon=${lon}`;
      const response = await fetch(url, { method: 'GET', credentials: 'include', headers: API_CONFIG.defaultHeaders });
      if (!response.ok) throw new Error(`${ERROR_TYPES.HTTP_ERROR}_${response.status}`);
      return response.json();
    }

    /** Single responsibility: fetch current weather by ZIP code */
    async function fetchWeatherByZip(zip) {
      const url = `${API_CONFIG.baseURL}/api/outfit/weather/current?zip=${zip}`;
      const response = await fetch(url, { method: 'GET', credentials: 'include', headers: API_CONFIG.defaultHeaders });
      if (!response.ok) throw new Error(`${ERROR_TYPES.HTTP_ERROR}_${response.status}`);
      return response.json();
    }

    /** Single responsibility: fetch forecast by coordinates */
    async function fetchForecastByCoords(lat, lon) {
      const url = `${API_CONFIG.baseURL}/api/outfit/weather/forecast?lat=${lat}&lon=${lon}`;
      const response = await fetch(url, { method: 'GET', credentials: 'include', headers: API_CONFIG.defaultHeaders });
      if (!response.ok) throw new Error(`${ERROR_TYPES.HTTP_ERROR}_${response.status}`);
      return response.json();
    }

    // ============================================
    // DATA PARSING (pure transformations, no DOM)
    // ============================================

    /** Single responsibility: transform raw weather API response into app state shape */
    function parseWeatherData(data) {
      return {
        temp: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        condition: data.weather[0].main,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: Math.round(data.wind.speed),
        icon: data.weather[0].icon
      };
    }

    /** Single responsibility: transform raw forecast API response into app state shape */
    function parseForecastData(data) {
      return data.list.slice(0, 8).map(item => ({
        time: new Date(item.dt * 1000),
        temp: Math.round(item.main.temp),
        feelsLike: Math.round(item.main.feels_like),
        condition: item.weather[0].main,
        description: item.weather[0].description,
        icon: item.weather[0].icon,
        humidity: item.main.humidity,
        windSpeed: Math.round(item.wind.speed),
        pop: Math.round(item.pop * 100)
      }));
    }

    /** Single responsibility: determine time of day label from the current hour */
    function getCurrentTimeOfDay() {
      const hour = new Date().getHours();
      if (hour >= 6 && hour < 12) return 'Morning';
      if (hour >= 12 && hour < 17) return 'Afternoon';
      if (hour >= 17 && hour < 21) return 'Evening';
      return 'Night';
    }

    /** Single responsibility: map a weather condition string to its display emoji */
    function getWeatherEmoji(condition) {
      const emojiMap = {
        'clear': '☀️', 'clouds': '☁️', 'rain': '🌧️', 'drizzle': '🌦️',
        'thunderstorm': '⛈️', 'snow': '❄️', 'mist': '🌫️', 'fog': '🌫️'
      };
      for (let key in emojiMap) {
        if (condition.includes(key)) return emojiMap[key];
      }
      return '🌤️';
    }

    // ============================================
    // OUTFIT LOGIC (pure computation, no DOM)
    // ============================================

    /** Single responsibility: analyze forecast array for day-ahead weather trends */
    function analyzeForecast(forecast, currentTemp) {
      if (!forecast || forecast.length === 0) {
        return { willRainLater: false, willGetColder: false, willGetWarmer: false, minTemp: currentTemp, maxTemp: currentTemp };
      }
      let willRainLater = false;
      let maxTemp = currentTemp;
      let minTemp = currentTemp;
      forecast.forEach(f => {
        if (f.condition.toLowerCase().includes('rain')) willRainLater = true;
        if (f.temp > maxTemp) maxTemp = f.temp;
        if (f.temp < minTemp) minTemp = f.temp;
      });
      return {
        willRainLater,
        willGetColder: minTemp < currentTemp - 5,
        willGetWarmer: maxTemp > currentTemp + 5,
        minTemp,
        maxTemp
      };
    }

    /** Single responsibility: compute outfit recommendations from weather + forecast analysis */
    function generateOutfitRecommendations(weather, timeOfDay, forecastAnalysis) {
      const temp = weather.temp;
      const condition = weather.condition.toLowerCase();
      const tod = timeOfDay.toLowerCase();
      const { willRainLater, willGetColder, willGetWarmer, minTemp, maxTemp } = forecastAnalysis;

      let advice, clothing, accessories, footwear;

      if (temp <= 40) {
        advice = "It's very cold outside! Layer up with warm clothing to stay comfortable. Make sure to cover exposed skin and wear insulated items.";
        clothing = ['Heavy winter coat', 'Thermal underwear', 'Thick sweater', 'Long pants', 'Warm socks'];
        accessories = ['Winter hat', 'Scarf', 'Insulated gloves', 'Hand warmers'];
        footwear = ['Insulated boots', 'Winter boots'];
      } else if (temp <= 55) {
        advice = "It's cool outside. Wear layers so you can adjust if you warm up. A light jacket or sweater should keep you comfortable.";
        clothing = ['Light jacket', 'Long-sleeve shirt', 'Jeans or long pants', 'Sweater or hoodie'];
        accessories = ['Light scarf', 'Baseball cap'];
        footwear = ['Sneakers', 'Casual shoes', 'Boots'];
      } else if (temp <= 70) {
        advice = "The weather is pleasant! Dress comfortably with light layers. You might want something you can take off if it gets warmer.";
        clothing = ['T-shirt', 'Light cardigan', 'Jeans or casual pants', 'Long-sleeve shirt (optional)'];
        accessories = ['Sunglasses'];
        footwear = ['Sneakers', 'Loafers', 'Casual shoes'];
      } else if (temp <= 85) {
        advice = "It's warm out! Dress in light, breathable fabrics to stay cool. Don't forget sun protection!";
        clothing = ['T-shirt', 'Shorts or light pants', 'Tank top', 'Light dress', 'Breathable fabrics'];
        accessories = ['Sunglasses', 'Sunscreen (SPF 30+)', 'Hat or cap'];
        footwear = ['Sandals', 'Sneakers', 'Flip-flops'];
      } else {
        advice = "It's hot outside! Wear minimal, light clothing and stay hydrated. Protect yourself from the sun with sunscreen and shade.";
        clothing = ['Tank top', 'Shorts', 'Light dress', 'Moisture-wicking fabrics'];
        accessories = ['Sunglasses', 'Sunscreen (SPF 50+)', 'Wide-brimmed hat', 'Water bottle'];
        footwear = ['Sandals', 'Flip-flops', 'Breathable shoes'];
      }

      if (condition.includes('rain') || condition.includes('drizzle')) {
        advice += " It's rainy, so bring rain gear and wear waterproof items.";
        accessories.push('Umbrella', 'Rain jacket', 'Waterproof bag');
        footwear = ['Waterproof boots', 'Rain boots'];
      }
      if (condition.includes('snow')) {
        advice += " There's snow! Make sure everything is waterproof and insulated.";
        accessories.push('Waterproof gloves', 'Snow boots');
        footwear = ['Snow boots', 'Insulated boots'];
      }
      if (condition.includes('clear') && temp > 70 && !accessories.includes('Sunscreen (SPF 30+)') && !accessories.includes('Sunscreen (SPF 50+)')) {
        advice += " It's sunny! Don't forget your sunscreen to protect your skin.";
        accessories.push('Sunscreen');
      }
      if (weather.windSpeed > 15 && temp > 60) {
        advice += " It's windy today, so secure loose items and consider a windbreaker.";
        clothing.push('Light windbreaker');
      }
      if (willRainLater && !condition.includes('rain')) {
        advice += " Rain is expected later today - bring an umbrella or rain jacket just in case.";
        if (!accessories.includes('Umbrella')) accessories.push('Umbrella (for later)');
        if (!accessories.includes('Rain jacket')) accessories.push('Rain jacket (for later)');
      }
      if (willGetColder && temp > 60) {
        advice += ` It will get colder later (down to ${minTemp}°F), so bring an extra layer to stay warm.`;
        clothing.push('Extra layer for later');
        accessories.push('Light jacket (for evening)');
      }
      if (willGetWarmer && temp < 70) {
        advice += ` It will warm up later (up to ${maxTemp}°F), so dress in layers you can remove.`;
      }
      if (tod === 'evening' || tod === 'night') {
        advice += ` Since it's ${timeOfDay}, consider bringing a light jacket as temperatures may drop.`;
        if (temp > 60 && !clothing.includes('Light jacket')) clothing.push('Light jacket (for later)');
      }

      return { advice, clothing, accessories, footwear };
    }

    // ============================================
    // UI RENDER FUNCTIONS (DOM only, no logic)
    // ============================================

    /** Single responsibility: show loading spinner in location status area */
    function showLoadingState() {
      document.getElementById('location-status').innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
          <div class="loading"></div>
          <span>Detecting your location...</span>
        </div>
      `;
    }

    /** Single responsibility: show manual ZIP input with an error message */
    function showManualInput(message) {
      document.getElementById('location-status').innerHTML = `<div class="error-message">${message}</div>`;
      document.getElementById('manual-location').classList.remove('hidden');
    }

    /** Single responsibility: show a toast notification */
    function showToast(message) {
      const toast = document.getElementById('toast');
      toast.textContent = message;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3000);
    }

    /** Single responsibility: render current weather values into weather panel DOM elements */
    function renderWeatherUI(weather, locationName) {
      document.getElementById('location-status').classList.add('hidden');
      document.getElementById('manual-location').classList.add('hidden');
      document.getElementById('weather-container').classList.remove('hidden');
      document.getElementById('location-name').textContent = locationName || 'Your Location';
      document.getElementById('weather-condition').textContent = weather.condition;
      document.getElementById('temperature').textContent = `${weather.temp}°F`;
      document.getElementById('humidity').textContent = `${weather.humidity}%`;
      document.getElementById('wind-speed').textContent = `${weather.windSpeed} mph`;
      document.getElementById('weather-icon').textContent = getWeatherEmoji(weather.condition.toLowerCase());
      document.getElementById('time-of-day').textContent = state.timeOfDay;
    }

    /** Single responsibility: render forecast cards into the forecast container */
    function renderForecastUI(forecast) {
      const container = document.getElementById('forecast-container');
      if (!forecast || forecast.length === 0) {
        container.innerHTML = '<div style="color: #bbb;">No forecast data available</div>';
        return;
      }
      const cardsHTML = forecast.map(f => {
        const timeStr = f.time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
        return `
          <div class="forecast-card">
            <div class="time">${timeStr}</div>
            <div class="icon">${getWeatherEmoji(f.condition.toLowerCase())}</div>
            <div class="temp">${f.temp}°F</div>
            <div class="desc">${f.description}</div>
            ${f.pop > 20 ? `<div style="color: #4a9eff; font-size: 0.8rem; margin-top: 0.3rem;">💧 ${f.pop}%</div>` : ''}
          </div>
        `;
      }).join('');
      container.innerHTML = `<div class="forecast-grid">${cardsHTML}</div>`;
    }

    /** Single responsibility: render outfit recommendation panels into DOM */
    function renderOutfitUI(recommendations) {
      const { advice, clothing, accessories, footwear } = recommendations;
      document.getElementById('general-advice').textContent = advice;
      document.getElementById('clothing-items').innerHTML = clothing.map(item => `<span class="outfit-item">${item}</span>`).join('');
      document.getElementById('accessories-items').innerHTML = accessories.map(item => `<span class="outfit-item">${item}</span>`).join('');
      document.getElementById('footwear-items').innerHTML = footwear.map(item => `<span class="outfit-item">${item}</span>`).join('');
      document.getElementById('outfit-recommendations').classList.remove('hidden');
      document.getElementById('outfit-recommendations').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    /** Single responsibility: map an error object to a user-friendly message string */
    function getErrorMessage(error) {
      if (error.message.startsWith(ERROR_TYPES.HTTP_ERROR)) {
        const code = error.message.split('_')[2];
        return `Server error (${code}). Please try again.`;
      }
      return ERROR_MESSAGES[error.message] || ERROR_MESSAGES.DEFAULT;
    }

    // ============================================
    // ORCHESTRATORS (coordinate the workflow)
    // ============================================

    /** Orchestrator: fetch weather by coords → parse → update state → render → chain to forecast */
    async function loadWeatherByCoords(lat, lon) {
      try {
        const data = await fetchWeatherByCoords(lat, lon);
        state.weather = parseWeatherData(data);
        state.location = { lat, lon, name: data.name };
        state.timeOfDay = getCurrentTimeOfDay();
        renderWeatherUI(state.weather, state.location.name);
        showToast('✅ Weather data loaded!');
        // API chain: weather success → fetch forecast
        await loadForecast(lat, lon);
      } catch (error) {
        console.error('❌ Error fetching weather by coords:', error);
        showManualInput('Failed to get weather data. Please try entering your ZIP code.');
      }
    }

    /** Orchestrator: fetch weather by ZIP → parse → update state → render → chain to forecast */
    async function loadWeatherByZip(zip) {
      try {
        showToast('🔍 Looking up weather...');
        const data = await fetchWeatherByZip(zip);
        state.weather = parseWeatherData(data);
        state.location = { lat: data.coord.lat, lon: data.coord.lon, name: data.name };
        state.timeOfDay = getCurrentTimeOfDay();
        renderWeatherUI(state.weather, state.location.name);
        showToast('✅ Weather data loaded!');
        // API chain: weather success → fetch forecast
        await loadForecast(state.location.lat, state.location.lon);
      } catch (error) {
        console.error('❌ Error fetching weather by ZIP:', error);
        showToast(`❌ ${getErrorMessage(error)}`);
      }
    }

    /** Orchestrator: fetch forecast → parse → update state → render */
    async function loadForecast(lat, lon) {
      try {
        const data = await fetchForecastByCoords(lat, lon);
        state.forecast = parseForecastData(data);
        renderForecastUI(state.forecast);
      } catch (error) {
        console.error('❌ Error fetching forecast:', error);
        document.getElementById('forecast-container').innerHTML = '<div style="color: #ff4a4a;">Could not load forecast data</div>';
      }
    }

    // ============================================
    // UI EVENT HANDLERS (orchestrate user interactions)
    // ============================================

    /** Orchestrator: initiate geolocation → delegate to loadWeatherByCoords via chain */
    function getLocation() {
      showLoadingState();
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          handleLocationSuccess,
          handleLocationError,
          { timeout: 10000, enableHighAccuracy: true }
        );
      } else {
        showManualInput('Geolocation is not supported by your browser');
      }
    }

    /** Single responsibility: extract coordinates from geolocation result and start weather chain */
    function handleLocationSuccess(position) {
      const { latitude: lat, longitude: lon } = position.coords;
      loadWeatherByCoords(lat, lon);
    }

    /** Single responsibility: map geolocation error to user message and show manual input */
    function handleLocationError(error) {
      const messages = {
        [error.PERMISSION_DENIED]: 'Permission denied.',
        [error.POSITION_UNAVAILABLE]: 'Location information unavailable.',
        [error.TIMEOUT]: 'Location request timed out.'
      };
      const detail = messages[error.code] || 'Unknown error occurred.';
      showManualInput(`Could not detect your location. ${detail}`);
    }

    /** Orchestrator: validate ZIP input → delegate to loadWeatherByZip */
    function initiateGetWeatherByZip() {
      const zip = document.getElementById('zip-input').value.trim();
      if (!validateZipCode(zip)) {
        showToast(`❌ ${ERROR_MESSAGES[ERROR_TYPES.INVALID_ZIP]}`);
        return;
      }
      loadWeatherByZip(zip);
    }

    /** Orchestrator: read state → analyze forecast → compute recommendations → render */
    function generateOutfit() {
      if (!state.weather) {
        showToast(`❌ ${ERROR_MESSAGES[ERROR_TYPES.NO_WEATHER_DATA]}`);
        return;
      }
      const forecastAnalysis = analyzeForecast(state.forecast, state.weather.temp);
      const recommendations = generateOutfitRecommendations(state.weather, state.timeOfDay, forecastAnalysis);
      renderOutfitUI(recommendations);
      showToast('✨ Outfit generated!');
    }

    /** Orchestrator: reset state and UI for a fresh weather lookup */
    function refreshWeather() {
      document.getElementById('outfit-recommendations').classList.add('hidden');
      document.getElementById('weather-container').classList.add('hidden');
      document.getElementById('location-status').innerHTML = `
        <p style="color: #bbb; margin-bottom: 1rem;">Click the button below to detect your location and get weather data.</p>
        <button class="btn btn-primary" style="width: 100%;" onclick="getLocation()">
          📍 Get My Location & Weather
        </button>
      `;
      document.getElementById('location-status').classList.remove('hidden');
      state.weather = null;
      state.forecast = null;
      state.location = null;
      state.timeOfDay = null;
    }

    /** Single responsibility: initialize application state on page load */
    function init() {
      state.weather = null;
      state.forecast = null;
      state.location = null;
      state.timeOfDay = null;
    }

    window.addEventListener('load', init);
  </script>
</body>
</html>