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
          <button class="btn btn-primary" onclick="getWeatherByZip()">Get Weather</button>
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
    const state = {
      weather: null,
      forecast: null,
      location: null,
      timeOfDay: null
    };

    const API_CONFIG = {
      baseURL: (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
        ? 'http://localhost:8587'
        : 'https://flask.opencodingsociety.com'
    };

    function init() {
      console.log('🚀 Outfit Generator initialized');
      state.weather = null;
      state.forecast = null;
      state.location = null;
      state.timeOfDay = null;
      console.log('🔄 State reset - ready for new weather data');
    }

    function getLocation() {
      console.log('📍 Attempting to get user location...');
      document.getElementById('location-status').innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
          <div class="loading"></div>
          <span>Detecting your location...</span>
        </div>
      `;
      
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          handleLocationSuccess,
          handleLocationError,
          { timeout: 10000, enableHighAccuracy: true }
        );
      } else {
        console.error('❌ Geolocation not supported by browser');
        showManualInput('Geolocation is not supported by your browser');
      }
    }

    function handleLocationSuccess(position) {
      console.log('✅ Location Found!');
      console.log('📍 Coordinates:', {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
      
      state.location = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      };

      getWeatherByCoords(state.location.lat, state.location.lon);
    }

    function handleLocationError(error) {
      console.warn('⚠️ Location detection failed:', error.message);
      let message = 'Could not detect your location. ';
      switch(error.code) {
        case error.PERMISSION_DENIED:
          message += 'Permission denied.';
          console.log('❌ User denied location permission');
          break;
        case error.POSITION_UNAVAILABLE:
          message += 'Location information unavailable.';
          console.log('❌ Location information unavailable');
          break;
        case error.TIMEOUT:
          message += 'Location request timed out.';
          console.log('⏱️ Location request timeout');
          break;
        default:
          message += 'Unknown error occurred.';
          console.log('❌ Unknown location error');
      }
      showManualInput(message);
    }

    function showManualInput(message) {
      console.log('📝 Showing manual ZIP code input');
      document.getElementById('location-status').innerHTML = `<div class="error-message">${message}</div>`;
      document.getElementById('manual-location').classList.remove('hidden');
    }

    async function getWeatherByZip() {
      const zipInput = document.getElementById('zip-input');
      const zip = zipInput.value.trim();

      if (!zip || zip.length !== 5 || !/^\d{5}$/.test(zip)) {
        console.error('❌ Invalid ZIP code entered:', zip);
        showToast('❌ Please enter a valid 5-digit ZIP code');
        return;
      }

      console.log('🔍 Looking up weather for ZIP code:', zip);
      showToast('🔍 Looking up weather...');

      try {
        const url = `${API_CONFIG.baseURL}/api/outfit/weather/current?zip=${zip}`;
        console.log('🌐 Making API request to backend:', url);
        
        const response = await fetch(url, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'X-Origin': 'client'
          }
        });
        
        if (!response.ok) {
          throw new Error(`Weather API returned ${response.status}`);
        }

        const data = await response.json();
        console.log('✅ Weather data received for ZIP:', zip);
        console.log('🌤️ Weather Data:', data);

        state.location = {
          lat: data.coord.lat,
          lon: data.coord.lon,
          name: data.name
        };

        displayWeather(data);
      } catch (error) {
        console.error('❌ Error fetching weather by ZIP:', error);
        showToast('❌ Could not get weather data. Please check your ZIP code.');
      }
    }

    async function getWeatherByCoords(lat, lon) {
      console.log('🌐 Fetching weather data for coordinates:', { lat, lon });
      
      try {
        const url = `${API_CONFIG.baseURL}/api/outfit/weather/current?lat=${lat}&lon=${lon}`;
        console.log('🌐 Making API request to backend:', url);
        
        const response = await fetch(url, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'X-Origin': 'client'
          }
        });
        
        if (!response.ok) {
          throw new Error(`Weather API returned ${response.status}`);
        }

        const data = await response.json();
        console.log('✅ Weather data successfully retrieved!');
        console.log('🌤️ Weather Data:', data);

        state.location.name = data.name;
        displayWeather(data);
      } catch (error) {
        console.error('❌ Error fetching weather:', error);
        showManualInput('Failed to get weather data. Please try entering your ZIP code.');
      }
    }

    function displayWeather(data) {
      console.log('📊 Displaying weather data...');
      
      state.weather = {
        temp: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        condition: data.weather[0].main,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: Math.round(data.wind.speed),
        icon: data.weather[0].icon
      };

      document.getElementById('location-status').classList.add('hidden');
      document.getElementById('manual-location').classList.add('hidden');
      document.getElementById('weather-container').classList.remove('hidden');
      document.getElementById('location-name').textContent = state.location.name || 'Your Location';
      document.getElementById('weather-condition').textContent = state.weather.condition;
      document.getElementById('temperature').textContent = `${state.weather.temp}°F`;
      document.getElementById('humidity').textContent = `${state.weather.humidity}%`;
      document.getElementById('wind-speed').textContent = `${state.weather.windSpeed} mph`;

      const weatherIcon = getWeatherEmoji(state.weather.condition.toLowerCase());
      document.getElementById('weather-icon').textContent = weatherIcon;

      const hour = new Date().getHours();
      let timeOfDay;
      if (hour >= 6 && hour < 12) {
        timeOfDay = 'Morning';
      } else if (hour >= 12 && hour < 17) {
        timeOfDay = 'Afternoon';
      } else if (hour >= 17 && hour < 21) {
        timeOfDay = 'Evening';
      } else {
        timeOfDay = 'Night';
      }
      state.timeOfDay = timeOfDay;
      document.getElementById('time-of-day').textContent = timeOfDay;

      console.log('✅ Weather display complete!');
      console.log('🕐 Current time of day:', timeOfDay);
      getForecast(state.location.lat, state.location.lon);
      showToast('✅ Weather data loaded!');
    }

    async function getForecast(lat, lon) {
      console.log('🔮 Fetching forecast data...');
      
      try {
        const url = `${API_CONFIG.baseURL}/api/outfit/weather/forecast?lat=${lat}&lon=${lon}`;
        console.log('🌐 Forecast API request to backend:', url);
        
        const response = await fetch(url, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'X-Origin': 'client'
          }
        });
        
        if (!response.ok) {
          throw new Error(`Forecast API returned ${response.status}`);
        }

        const data = await response.json();
        console.log('✅ Forecast data received!');
        console.log('🔮 Forecast Data:', data);

        const todayForecasts = data.list.slice(0, 8);
        state.forecast = todayForecasts.map(item => ({
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

        console.log('📊 Processed forecast for today:', state.forecast.length, 'time slots');
        displayForecast();
        
      } catch (error) {
        console.error('❌ Error fetching forecast:', error);
        document.getElementById('forecast-container').innerHTML = '<div style="color: #ff4a4a;">Could not load forecast data</div>';
      }
    }

    function displayForecast() {
      console.log('📊 Displaying forecast cards...');
      const container = document.getElementById('forecast-container');
      
      if (!state.forecast || state.forecast.length === 0) {
        container.innerHTML = '<div style="color: #bbb;">No forecast data available</div>';
        return;
      }

      const forecastHTML = state.forecast.map(f => {
        const timeStr = f.time.toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        });
        const weatherIcon = getWeatherEmoji(f.condition.toLowerCase());
        
        return `
          <div class="forecast-card">
            <div class="time">${timeStr}</div>
            <div class="icon">${weatherIcon}</div>
            <div class="temp">${f.temp}°F</div>
            <div class="desc">${f.description}</div>
            ${f.pop > 20 ? `<div style="color: #4a9eff; font-size: 0.8rem; margin-top: 0.3rem;">💧 ${f.pop}%</div>` : ''}
          </div>
        `;
      }).join('');

      container.innerHTML = `<div class="forecast-grid">${forecastHTML}</div>`;
      console.log('✅ Forecast display complete!');
    }

    function getWeatherEmoji(condition) {
      const emojiMap = {
        'clear': '☀️',
        'clouds': '☁️',
        'rain': '🌧️',
        'drizzle': '🌦️',
        'thunderstorm': '⛈️',
        'snow': '❄️',
        'mist': '🌫️',
        'fog': '🌫️'
      };

      for (let key in emojiMap) {
        if (condition.includes(key)) {
          return emojiMap[key];
        }
      }
      return '🌤️';
    }

    function generateOutfit() {
      console.log('👔 Generating outfit recommendations...');
      console.log('📊 Based on temperature:', state.weather.temp + '°F');
      console.log('🌤️ Weather condition:', state.weather.condition);
      console.log('🕐 Time of day:', state.timeOfDay);

      const temp = state.weather.temp;
      const condition = state.weather.condition.toLowerCase();
      const timeOfDay = state.timeOfDay.toLowerCase();

      let advice = '';
      let clothing = [];
      let accessories = [];
      let footwear = [];

      let willRainLater = false;
      let willGetColder = false;
      let willGetWarmer = false;
      let maxTemp = temp;
      let minTemp = temp;

      if (state.forecast && state.forecast.length > 0) {
        console.log('🔮 Analyzing forecast for day planning...');
        
        state.forecast.forEach(f => {
          if (f.condition.toLowerCase().includes('rain')) willRainLater = true;
          if (f.temp > maxTemp) maxTemp = f.temp;
          if (f.temp < minTemp) minTemp = f.temp;
        });

        willGetColder = (minTemp < temp - 5);
        willGetWarmer = (maxTemp > temp + 5);

        console.log('📊 Forecast analysis:', {
          willRainLater,
          willGetColder,
          willGetWarmer,
          tempRange: `${minTemp}°F - ${maxTemp}°F`
        });
      }

      if (temp <= 40) {
        console.log('🥶 Very cold weather detected');
        advice = "It's very cold outside! Layer up with warm clothing to stay comfortable. Make sure to cover exposed skin and wear insulated items.";
        clothing = ['Heavy winter coat', 'Thermal underwear', 'Thick sweater', 'Long pants', 'Warm socks'];
        accessories = ['Winter hat', 'Scarf', 'Insulated gloves', 'Hand warmers'];
        footwear = ['Insulated boots', 'Winter boots'];
      } else if (temp <= 55) {
        console.log('🍂 Cool weather detected');
        advice = "It's cool outside. Wear layers so you can adjust if you warm up. A light jacket or sweater should keep you comfortable.";
        clothing = ['Light jacket', 'Long-sleeve shirt', 'Jeans or long pants', 'Sweater or hoodie'];
        accessories = ['Light scarf', 'Baseball cap'];
        footwear = ['Sneakers', 'Casual shoes', 'Boots'];
      } else if (temp <= 70) {
        console.log('😊 Mild weather detected');
        advice = "The weather is pleasant! Dress comfortably with light layers. You might want something you can take off if it gets warmer.";
        clothing = ['T-shirt', 'Light cardigan', 'Jeans or casual pants', 'Long-sleeve shirt (optional)'];
        accessories = ['Sunglasses'];
        footwear = ['Sneakers', 'Loafers', 'Casual shoes'];
      } else if (temp <= 85) {
        console.log('☀️ Warm weather detected');
        advice = "It's warm out! Dress in light, breathable fabrics to stay cool. Don't forget sun protection!";
        clothing = ['T-shirt', 'Shorts or light pants', 'Tank top', 'Light dress', 'Breathable fabrics'];
        accessories = ['Sunglasses', 'Sunscreen (SPF 30+)', 'Hat or cap'];
        footwear = ['Sandals', 'Sneakers', 'Flip-flops'];
      } else {
        console.log('🔥 Hot weather detected');
        advice = "It's hot outside! Wear minimal, light clothing and stay hydrated. Protect yourself from the sun with sunscreen and shade.";
        clothing = ['Tank top', 'Shorts', 'Light dress', 'Moisture-wicking fabrics'];
        accessories = ['Sunglasses', 'Sunscreen (SPF 50+)', 'Wide-brimmed hat', 'Water bottle'];
        footwear = ['Sandals', 'Flip-flops', 'Breathable shoes'];
      }

      if (condition.includes('rain') || condition.includes('drizzle')) {
        console.log('🌧️ Rain detected - adding rain gear');
        advice += " It's rainy, so bring rain gear and wear waterproof items.";
        accessories.push('Umbrella', 'Rain jacket', 'Waterproof bag');
        footwear = ['Waterproof boots', 'Rain boots'];
      }

      if (condition.includes('snow')) {
        console.log('❄️ Snow detected - adding winter gear');
        advice += " There's snow! Make sure everything is waterproof and insulated.";
        accessories.push('Waterproof gloves', 'Snow boots');
        footwear = ['Snow boots', 'Insulated boots'];
      }

      if (condition.includes('clear') && temp > 70) {
        console.log('☀️ Sunny conditions detected');
        advice += " It's sunny! Don't forget your sunscreen to protect your skin.";
        if (!accessories.includes('Sunscreen (SPF 30+)') && !accessories.includes('Sunscreen (SPF 50+)')) {
          accessories.push('Sunscreen');
        }
      }

      if (state.weather.windSpeed > 15) {
        console.log('💨 Windy conditions detected');
        advice += " It's windy today, so secure loose items and consider a windbreaker.";
        if (temp > 60) {
          clothing.push('Light windbreaker');
        }
      }

      if (willRainLater && !condition.includes('rain')) {
        console.log('🌧️ Rain expected later in the day');
        advice += " Rain is expected later today - bring an umbrella or rain jacket just in case.";
        if (!accessories.includes('Umbrella')) accessories.push('Umbrella (for later)');
        if (!accessories.includes('Rain jacket')) accessories.push('Rain jacket (for later)');
      }

      if (willGetColder) {
        console.log('🌡️ Temperature will drop later');
        advice += ` It will get colder later (down to ${minTemp}°F), so bring an extra layer to stay warm.`;
        if (temp > 60) {
          clothing.push('Extra layer for later');
          accessories.push('Light jacket (for evening)');
        }
      }

      if (willGetWarmer && temp < 70) {
        console.log('🌡️ Temperature will rise later');
        advice += ` It will warm up later (up to ${maxTemp}°F), so dress in layers you can remove.`;
      }

      if (timeOfDay === 'evening' || timeOfDay === 'night') {
        console.log('🌙 Evening/Night time detected');
        advice += " Since it's " + timeOfDay + ", consider bringing a light jacket as temperatures may drop.";
        if (temp > 60 && !clothing.includes('Light jacket')) {
          clothing.push('Light jacket (for later)');
        }
      }

      document.getElementById('general-advice').textContent = advice;
      document.getElementById('clothing-items').innerHTML = clothing.map(item => `<span class="outfit-item">${item}</span>`).join('');
      document.getElementById('accessories-items').innerHTML = accessories.map(item => `<span class="outfit-item">${item}</span>`).join('');
      document.getElementById('footwear-items').innerHTML = footwear.map(item => `<span class="outfit-item">${item}</span>`).join('');
      document.getElementById('outfit-recommendations').classList.remove('hidden');
      
      console.log('✅ Outfit recommendations generated!');
      showToast('✨ Outfit generated!');
      document.getElementById('outfit-recommendations').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function refreshWeather() {
      console.log('🔄 Refreshing weather data...');
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
      console.log('✅ Ready for new weather data');
    }

    function showToast(message) {
      const toast = document.getElementById('toast');
      toast.textContent = message;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }

    window.addEventListener('load', init);
  </script>
</body>
</html>