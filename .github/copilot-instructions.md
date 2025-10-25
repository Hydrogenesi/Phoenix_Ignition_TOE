# GitHub Copilot Instructions for Phoenix Ignition TOE

## Project Overview

This repository contains the **Phoenix Ignition** web application - a Node.js/Express application that displays haikus with a ceremonial/cosmic theme. It's a simple web server using:
- **Node.js** with Express framework
- **EJS** templating engine for views
- Static asset serving for CSS and images
- JSON-based data storage for haikus

## Coding Style & Standards

### JavaScript Style
- Use modern ES6+ JavaScript syntax (const/let, arrow functions, template literals)
- Follow camelCase for variables and functions
- Use PascalCase for classes
- Use 2-space indentation (consistent with existing code)
- Prefer `const` over `let` when variables won't be reassigned
- Use template literals (backticks) for string interpolation

### Express Patterns
- Use middleware functions appropriately
- Follow RESTful routing conventions
- Keep route handlers concise and readable
- Use `app.use()` for middleware, `app.set()` for configuration

### Code Organization
- Keep route logic in the main `index.js` or separate route files as complexity grows
- Place static assets in `public/` directory
- Place view templates in `views/` directory
- Store configuration data in JSON files at root level

## Project Structure

```
├── .github/               # GitHub configuration and workflows
├── public/                # Static assets (CSS, images)
│   ├── css/
│   └── images/
├── views/                 # EJS template files
│   └── index.ejs
├── index.js               # Main application entry point
├── haikus.json            # Data file for haiku content
├── package.json           # Node.js dependencies and scripts
└── process.json           # Process manager configuration
```

## Dependencies

### Package Management
- Use `npm` for dependency management
- Run `npm install` to install dependencies
- Only add well-maintained, necessary packages
- Update `package.json` when adding new dependencies
- Prefer packages with active maintenance and good security records

### Current Dependencies
- **express**: Web application framework
- **ejs**: Template engine
- **nodemon** (dev): Development server with auto-reload

## Development Guidelines

### Running the Application
- Development: `npm run dev` (uses nodemon for auto-reload)
- Production: `npm start` (runs node directly)
- Default port: 3000 (or PORT environment variable)

### Making Changes
- Test changes locally using `npm run dev`
- Ensure the app starts without errors
- Verify routes and views render correctly
- Check that static assets load properly

### Adding New Features
- For new routes: Add them to `index.js` following existing patterns
- For new views: Create EJS files in `views/` directory
- For new data: Use JSON files similar to `haikus.json`
- For new assets: Place in appropriate `public/` subdirectories

## Security Guidelines

- Never commit secrets, API keys, or credentials to the repository
- Use environment variables for sensitive configuration (via `process.env`)
- Keep dependencies up to date to avoid security vulnerabilities
- Validate and sanitize any user input if adding interactive features
- Use HTTPS in production deployments

## Documentation

- Update README.md when adding major features or changing setup instructions
- Add inline comments for complex logic or non-obvious code
- Keep comments concise and meaningful
- Document any environment variables needed

## Azure Deployment

This project includes Azure Web Apps deployment workflows:
- Main deployment workflow in `.github/workflows/azure-webapps-node.yml`
- Follow existing workflow patterns for CI/CD changes
- Test deployment configuration changes carefully

## Best Practices

### Do's
✅ Follow the existing code style and structure
✅ Keep changes minimal and focused
✅ Test locally before committing
✅ Use semantic and descriptive variable names
✅ Write clean, readable code over clever code
✅ Maintain the poetic/ceremonial theme in content

### Don'ts
❌ Don't add unnecessary dependencies
❌ Don't modify working code without clear reason
❌ Don't commit `node_modules/` or build artifacts
❌ Don't remove or modify the haiku/ceremonial theme
❌ Don't break existing routes or functionality

## Thematic Considerations

This project has a unique ceremonial/cosmic/poetic theme:
- Maintain the mythic and ceremonial tone in content
- Preserve references to Phoenix, Hydrogenesi, and cosmic themes
- Keep the balance between technical implementation and artistic expression
- Respect the project's creative vision when making suggestions
