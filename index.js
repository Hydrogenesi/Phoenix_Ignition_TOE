/**
 * Phoenix Ignition - Main Entry Point
 * 
 * This is the heart of the ceremonial framework - where the app awakens,
 * where routes are established, and where the ignition sequence begins.
 * 
 * Flow: Configuration → Server Setup → Route Definition → Ignition
 */

const express = require('express');
const ejs = require('ejs');
const { SERVER_CONFIG, DATA_SOURCES, VIEW_CONFIG } = require('./config');

// Load the ceremonial haiku scrolls - verses that guide the ritual
const haikuScrolls = require(DATA_SOURCES.HAIKUS_PATH);

/**
 * Initialize the ceremonial application
 * Creates the Express app that serves as our altar
 */
function initializeApp() {
  const app = express();
  
  // Configure the view engine - the lens through which ceremony is rendered
  app.set('view engine', VIEW_CONFIG.ENGINE);
  
  // Serve static assets - glyphs, styles, and visual elements
  app.use(express.static(VIEW_CONFIG.STATIC_DIR));
  
  return app;
}

/**
 * Define ceremonial routes - the pathways through the ritual
 * Each route is a threshold, a moment of invocation
 */
function defineRoutes(app) {
  // Root route - The Opening Gesture
  // When a conductor arrives, we present the haiku scrolls
  app.get('/', (req, res) => {
    res.render('index', { haikus: haikuScrolls });
  });
  
  return app;
}

/**
 * Ignite the server - Begin the ceremonial pulse
 * This starts the listening process, awaiting participants
 */
function igniteServer(app) {
  const server = app.listen(SERVER_CONFIG.PORT, () => {
    if (SERVER_CONFIG.ENV === 'development') {
      console.log(`✨ Phoenix Ignition activated on port ${SERVER_CONFIG.PORT}`);
      console.log(`🔥 Ceremonial flame burning at http://localhost:${SERVER_CONFIG.PORT}`);
    }
  });
  
  return server;
}

/**
 * Main Ignition Sequence
 * The complete ritual from initialization to activation
 */
function main() {
  const app = initializeApp();
  defineRoutes(app);
  igniteServer(app);
}

// Execute the ignition sequence when this module is run directly
if (require.main === module) {
  main();
}

// Export for testing and external invocation
module.exports = { initializeApp, defineRoutes, igniteServer, main };