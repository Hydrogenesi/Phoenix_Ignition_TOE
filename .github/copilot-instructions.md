# GitHub Copilot Instructions for Phoenix_Ignition_TOE

## Project Overview

This repository has a dual purpose:
1. **Primary**: A Node.js/Express web application that displays haikus with Octocat images
2. **Secondary**: A conceptual framework for "Phoenix Ignition" - a ceremonial framework for unified emergence, combining cosmological modeling, poetic narrative, and visualization concepts (described in README.md but not yet implemented)

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Template Engine**: EJS (Embedded JavaScript)
- **Package Manager**: npm
- **Dependencies**:
  - express: ^4.21.2
  - ejs: ^3.1.10
- **Dev Dependencies**:
  - nodemon: ^2.0.19

## Project Structure

```
Phoenix_Ignition_TOE/
├── .github/
│   ├── workflows/          # GitHub Actions workflows
│   └── copilot-instructions.md  # This file
├── public/                 # Static assets
│   ├── css/               # Stylesheets
│   └── images/            # Static images
├── views/
│   └── index.ejs          # Main template file
├── index.js               # Main application entry point
├── haikus.json            # Haiku data with image references
├── package.json           # npm configuration
├── process.json           # Process configuration
├── web.config             # Web server configuration
└── README.md              # Project documentation
```

## Build & Run Instructions

### Installation
```bash
npm install
```

### Running the Application
```bash
# Development mode (with auto-reload via nodemon)
npm run dev

# Production mode
npm start
```

The application will start on port 3000 by default (or the port specified in the `PORT` environment variable).

### Testing
Currently, there are no automated tests configured for this project.

### Linting
No linting tools are currently configured.

## Code Style Guidelines

### JavaScript
- Use `let` and `const` for variable declarations (avoid `var`)
- Use single quotes for strings
- Follow existing indentation (2 spaces)
- Keep code simple and readable

### File Organization
- Static assets go in `public/`
- Views/templates go in `views/`
- Configuration files stay at root level
- Data files (like `haikus.json`) at root level

## Development Workflow

1. Make changes to code
2. Test locally using `npm run dev`
3. Verify the application runs without errors
4. Commit changes with descriptive messages

## Common Tasks

### Adding New Routes
Add routes in `index.js` following the Express.js pattern:
```javascript
app.get('/route-path', (req, res) => {
  res.render('template-name', {data: data});
});
```

### Adding New Haikus
Edit `haikus.json` following the existing structure:
```json
{
  "text": "haiku text here,\nsecond line of the haiku,\nand the third line too",
  "image": "image-filename.jpg"
}
```

### Adding Static Assets
- CSS files: place in `public/css/`
- Images: place in `public/images/`
- Reference in templates using `/css/` or `/images/` paths

## Important Notes

1. The application uses EJS as the templating engine - templates should have `.ejs` extension
2. Static files are served from the `public/` directory
3. The application listens on the port specified by the `PORT` environment variable or defaults to 3000
4. The README.md contains aspirational content about "Phoenix Ignition" framework that is not yet implemented in code

## Dependencies Management

- Always run `npm install` after pulling changes that modify `package.json`
- Use `npm install --save <package>` to add new dependencies
- Use `npm install --save-dev <package>` to add dev dependencies
- Keep dependencies up to date for security

## Security Considerations

- Never commit sensitive data, API keys, or credentials
- Keep dependencies updated to patch security vulnerabilities
- Validate and sanitize any user input if adding forms or APIs
- Use environment variables for configuration (via `process.env`)

## Contribution Guidelines

1. Keep changes minimal and focused
2. Test changes locally before committing
3. Follow existing code patterns and style
4. Update documentation if changing functionality
5. Don't remove or modify working code unnecessarily
