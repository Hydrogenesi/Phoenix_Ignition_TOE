/**
 * Phoenix Ignition - Test Suite
 * 
 * These tests mirror the ceremonial arc - each test a step in the ignition sequence.
 * We verify that each component of the ritual performs its role with precision and grace.
 * 
 * Test Flow:
 * 1. Configuration Validation - Ensure the ceremonial parameters are set
 * 2. Application Initialization - Verify the altar is properly constructed
 * 3. Route Definition - Test that pathways through the ritual are established
 * 4. Haiku Serving - Confirm the scrolls are delivered to conductors
 * 5. Edge Cases - Validate resilience in the face of the unexpected
 */

const request = require('supertest');
const { initializeApp, defineRoutes } = require('./index');
const { SERVER_CONFIG, DATA_SOURCES, VIEW_CONFIG } = require('./config');

describe('Phoenix Ignition - Ceremonial Test Suite', () => {
  
  describe('Configuration Module - Sacred Parameters', () => {
    test('SERVER_CONFIG contains the altar port', () => {
      expect(SERVER_CONFIG.PORT).toBeDefined();
      expect(typeof SERVER_CONFIG.PORT).toBe('number');
    });
    
    test('DATA_SOURCES points to the haiku scrolls', () => {
      expect(DATA_SOURCES.HAIKUS_PATH).toBe('./haikus.json');
    });
    
    test('VIEW_CONFIG specifies the rendering engine', () => {
      expect(VIEW_CONFIG.ENGINE).toBe('ejs');
      expect(VIEW_CONFIG.STATIC_DIR).toBe('public');
    });
  });
  
  describe('Application Initialization - The Altar Construction', () => {
    let app;
    
    beforeEach(() => {
      app = initializeApp();
    });
    
    test('initializeApp creates an Express application', () => {
      expect(app).toBeDefined();
      expect(typeof app).toBe('function'); // Express apps are functions
    });
    
    test('view engine is set to the ceremonial engine', () => {
      expect(app.get('view engine')).toBe('ejs');
    });
  });
  
  describe('Route Definition - Ceremonial Pathways', () => {
    let app;
    
    beforeEach(() => {
      app = initializeApp();
      defineRoutes(app);
    });
    
    test('root route serves the index page with haikus', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.text).toContain('Haikus');
    });
    
    test('root route returns HTML content', async () => {
      const response = await request(app).get('/');
      expect(response.type).toMatch(/html/);
    });
    
    test('haiku data is rendered in the response', async () => {
      const response = await request(app).get('/');
      // Check for haiku content - at least one verse should be present
      expect(response.text).toContain('rain in seattle');
    });
  });
  
  describe('Static Assets - Visual Glyphs and Styles', () => {
    let app;
    
    beforeEach(() => {
      app = initializeApp();
      defineRoutes(app);
    });
    
    test('CSS styles are accessible', async () => {
      const response = await request(app).get('/css/main.css');
      expect(response.status).toBe(200);
      expect(response.type).toMatch(/css/);
    });
  });
  
  describe('Edge Cases - Resilience Choreography', () => {
    let app;
    
    beforeEach(() => {
      app = initializeApp();
      defineRoutes(app);
    });
    
    test('non-existent routes return 404', async () => {
      const response = await request(app).get('/nonexistent-path');
      expect(response.status).toBe(404);
    });
    
    test('application handles multiple simultaneous requests', async () => {
      const requests = Array(5).fill(null).map(() => 
        request(app).get('/')
      );
      
      const responses = await Promise.all(requests);
      
      responses.forEach(response => {
        expect(response.status).toBe(200);
      });
    });
  });
  
  describe('Haiku Data Integrity - Scroll Verification', () => {
    test('haiku scrolls load without error', () => {
      const haikus = require(DATA_SOURCES.HAIKUS_PATH);
      expect(haikus).toBeDefined();
      expect(Array.isArray(haikus)).toBe(true);
      expect(haikus.length).toBeGreaterThan(0);
    });
    
    test('each haiku scroll contains text and image', () => {
      const haikus = require(DATA_SOURCES.HAIKUS_PATH);
      haikus.forEach(haiku => {
        expect(haiku.text).toBeDefined();
        expect(haiku.image).toBeDefined();
        expect(typeof haiku.text).toBe('string');
        expect(typeof haiku.image).toBe('string');
      });
    });
  });
});
