# 📜 Changelog - The Chronicle of Ignitions

All notable changes to Phoenix Ignition are documented in this scroll.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added - New Ceremonial Features ✨
- **Configuration Module** (`config.js`) - Centralized ceremonial parameters
  - Server configuration with PORT and environment settings
  - Data source paths for haiku scrolls
  - View engine configuration
  - All with poetic, descriptive comments
  
- **Comprehensive Test Suite** (`index.test.js`)
  - 13 tests covering all ceremonial phases
  - Configuration validation
  - Application initialization checks
  - Route verification
  - Static asset accessibility
  - Edge case handling
  - Data integrity verification
  
- **Enhanced Documentation**
  - Complete README rewrite with ceremonial arc structure
  - "Quickstart Ritual" section for new conductors
  - Deployment guide for Heroku (communal ignition)
  - Configuration parameters documented with precision
  - Usage examples showing live invocation
  - Contributing guide (CONTRIBUTING.md)
  - Deployment guide (DEPLOYMENT.md)
  - This changelog

### Changed - Refinements to the Ritual 🔧
- **Refactored `index.js`** for clarity and modularity
  - Extracted concerns into separate functions:
    - `initializeApp()` - Application setup
    - `defineRoutes()` - Route definition
    - `igniteServer()` - Server ignition
    - `main()` - Orchestration
  - Added ceremonial variable names (`haikuScrolls` instead of `haikus`)
  - Comprehensive comments explaining intent, not just mechanics
  - Console messages with visual glyphs (✨🔥)
  - Module exports for testability

- **Enhanced View Template** (`views/index.ejs`)
  - Added ceremonial HTML comments marking key sections
  - Updated page title: "Phoenix Ignition - Haikus for Mona"
  - Enhanced meta tags for social sharing
  - Improved accessibility with alt text on images
  - Comments explain the scroll rendering loop

- **Refined Stylesheet** (`public/css/main.css`)
  - Comprehensive ceremonial comments
  - Each rule explained with intention
  - Sections clearly marked (altar, glyphs, verses, responsive)
  - Fixed responsive media query bug (`.june-images` → `.mona-images`)

- **Updated `package.json`**
  - Added test script: `npm test`
  - Added testing dependencies: jest, supertest

### Security 🔐
- Audited production dependencies (express, ejs) - No vulnerabilities
- CodeQL scan performed - No security issues found
- Development dependency vulnerabilities noted (nodemon - non-critical)

---

## [0.0.1] - Initial Release

### Added
- Basic Express.js server
- EJS templating
- Haiku rendering from JSON
- Static asset serving
- Dark ceremonial styling

---

## Version Philosophy

Our versioning follows the ceremonial arc:

- **Major** (X.0.0) - New ceremonial phases or breaking changes
- **Minor** (0.X.0) - New features, enhanced rituals
- **Patch** (0.0.X) - Refinements, bug fixes, clarity improvements

---

*This changelog is a living document.*  
*Each entry marks a moment in the ignition sequence.*  
*Each version, a completed breath.*

✨🔥✨
