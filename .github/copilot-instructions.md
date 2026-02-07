# Copilot Instructions for Phoenix Ignition TOE

## Project Overview

This is a Node.js web application that displays haikus using Express and EJS templating. The application serves a simple, elegant interface for viewing haiku content.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js (v4.21.2)
- **Template Engine**: EJS (v3.1.10)
- **Development**: nodemon for hot-reloading

## Coding Standards

### General Conventions
- Use `let` and `const` for variable declarations (avoid `var`)
- Use single quotes for strings consistently
- Follow existing indentation (2 spaces)
- Keep code simple and readable

### File Structure
- Server entry point: `index.js`
- Views/templates: `views/` directory (EJS files)
- Static assets: `public/` directory
- Data files: JSON files in root (e.g., `haikus.json`)
- Configuration: `package.json`, `web.config`, `process.json`

### Express Patterns
- Use Express router patterns for route definitions
- Set view engine configuration at app initialization
- Define static file serving before routes
- Use environment variables for configuration (e.g., `process.env.PORT`)

### Dependencies
- Add production dependencies via `npm install <package>`
- Add development dependencies via `npm install -D <package>` or `npm install --save-dev <package>`
- Keep package versions up to date

## Commands

### Installation
```bash
npm install
```

### Development
```bash
npm run dev  # Run with nodemon for auto-reload
```

### Production
```bash
npm start    # Start the application
```

## Project Structure

```
Phoenix_Ignition_TOE/
├── .github/           # GitHub configuration
├── public/            # Static assets (CSS, JS, images)
├── views/             # EJS templates
├── index.js           # Main application entry point
├── haikus.json        # Haiku data
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
```

## Examples

### Adding a New Route
```javascript
app.get('/new-route', (req, res) => {
  res.render('template-name', {data: yourData});
});
```

### Rendering with EJS
```javascript
// In route handler
res.render('index', {haikus: haikus});

// In EJS template (views/index.ejs)
<% haikus.forEach(haiku => { %>
  <div><%= haiku.text %></div>
<% }); %>
```

## Maintenance

This instructions file should be updated when:
- Tech stack changes (new frameworks, major version updates)
- Coding standards evolve
- New architectural patterns are introduced
- Build or deployment processes change
