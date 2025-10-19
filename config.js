/**
 * Configuration Module - The Ceremonial Parameters
 * 
 * This module defines the sacred constants and settings that govern
 * the Phoenix Ignition ceremony. Each parameter is a jewel in the
 * ignition kit, carefully placed to enable the ritual's flow.
 */

// Server Configuration - The Altar Settings
const SERVER_CONFIG = {
  // Port where the ceremonial flame is kindled
  // Falls back to 3000 if the environment doesn't provide guidance
  PORT: process.env.PORT || 3000,
  
  // Environment mode - determines the intensity of the flame
  ENV: process.env.NODE_ENV || 'development'
};

// Data Sources - The Wellspring of Wisdom
const DATA_SOURCES = {
  // Path to the haiku scrolls - ceremonial verses that guide the experience
  HAIKUS_PATH: './haikus.json'
};

// View Configuration - The Visual Ceremony
const VIEW_CONFIG = {
  // Template engine for rendering the ceremonial interface
  ENGINE: 'ejs',
  
  // Static assets directory - where glyphs and styles reside
  STATIC_DIR: 'public'
};

// Export the ceremonial configuration
module.exports = {
  SERVER_CONFIG,
  DATA_SOURCES,
  VIEW_CONFIG
};
