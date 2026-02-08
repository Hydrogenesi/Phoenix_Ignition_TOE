---
description: "Custom instructions for Phoenix Ignition: A ceremonial framework for unified emergence"
---

# Phoenix Ignition: Project Overview

Phoenix Ignition is a live synthesis of cosmological modeling, poetic narrative, and ceremonial activation. This repository houses a Node.js/Express web application that serves interactive content related to the Hydrogenesi and FLQG (Fractal Loop Quantum Gravity) frameworks.

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js 4.x
- **Template Engine**: EJS 3.x
- **Development Tools**: nodemon for hot-reloading

## Build & Run Commands

- `npm install` – Install dependencies
- `npm start` – Start the production server (listens on PORT env var or 3000)
- `npm run dev` – Start development server with hot-reloading via nodemon

## Project Structure

```
Phoenix_Ignition_TOE/
├── .github/          # GitHub configuration and workflows
├── public/           # Static assets (CSS, images, client-side JS)
├── views/            # EJS templates
├── index.js          # Main Express application entry point
├── haikus.json       # Content data
├── package.json      # Node.js dependencies and scripts
└── README.md         # Project documentation
```

## Coding Standards

### JavaScript Style
- Use modern ES6+ syntax (let/const, arrow functions, destructuring)
- Follow consistent indentation (2 spaces)
- Use meaningful variable names that reflect the ceremonial/scientific nature of the project
- Keep functions focused and modular

### Express.js Patterns
- Use middleware appropriately for static file serving and view rendering
- Keep route handlers concise and readable
- Use environment variables for configuration (PORT, etc.)

### File Organization
- Place static assets in `/public` directory
- Store EJS templates in `/views` directory
- Keep data files (like haikus.json) at root level for easy access
- Use descriptive filenames that reflect content purpose

## Developer-Focused Tasks

### Summarizing PR Changes
When reviewing PRs:
- Focus on how changes affect the ceremonial/interactive experience
- Note any modifications to routing, templates, or data structures
- Highlight changes to dependencies or build configuration
- Consider impact on both local development and Azure deployment

### Explaining Diffs
- Relate code changes to the project's dual nature (scientific modeling + poetic narrative)
- Explain technical changes in accessible terms
- Note any breaking changes or migration steps needed

### Identifying Merge Conflicts
- Pay special attention to conflicts in:
  - `package.json` and `package-lock.json` (dependency conflicts)
  - `index.js` (routing conflicts)
  - Template files in `/views` (content conflicts)
  - Azure deployment configuration files

### Generating Commit Messages
Follow this format:
- Use present tense ("Add feature" not "Added feature")
- Start with a verb (Add, Update, Fix, Remove, Refactor)
- Reference the ceremonial/scientific context when relevant
- Examples:
  - `Add haiku display route with EJS template`
  - `Update Hydrogenesi visualization overlay`
  - `Fix ceremonial header styling in main template`
  - `Refactor Express middleware for static assets`

### Drafting Issue Descriptions
- Start with the user impact or ceremonial goal
- Provide technical context (affected files, components)
- Include steps to reproduce (for bugs)
- Suggest potential solutions or approaches
- Tag appropriately (enhancement, bug, documentation)

### Drafting PR Reviews
Focus on:
- **Functionality**: Does it serve the ceremonial/scientific purpose?
- **Code Quality**: Is it maintainable and consistent with existing patterns?
- **Performance**: Any concerns for the live performance/visualization use case?
- **Documentation**: Are changes reflected in README or comments?
- **Testing**: Can changes be verified locally and in Azure deployment?

### Architectural Commentary
This project bridges:
1. **Scientific modeling** (Hydrogenesi, FLQG frameworks)
2. **Poetic narrative** (ceremonial language, mythic storytelling)
3. **Interactive visualization** (Dash app references, ceremonial activation)

When suggesting architectural changes:
- Maintain the balance between technical rigor and artistic expression
- Consider the live performance/public presentation context
- Respect the ceremonial and mythic language in comments/docs
- Keep the application lightweight for reliable deployment
- Ensure changes support both local development and Azure App Service deployment

## Deployment Context

This application is designed for deployment on Azure App Service:
- Uses `web.config` for IIS integration
- Respects `PORT` environment variable
- Includes GitHub Actions workflows for CI/CD
- See `.github/workflows/azure-webapps-node.yml` for deployment pipeline

## Code Examples

### Good: Express Route Pattern
```javascript
app.get('/ceremony', (req, res) => {
  const ceremonyData = require('./ceremony.json');
  res.render('ceremony', { data: ceremonyData });
});
```

### Good: Static Asset Serving
```javascript
app.use(express.static('public'));
```

### Good: Environment Configuration
```javascript
const port = process.env.PORT || 3000;
```

## Security & Best Practices

- Never commit API keys, credentials, or secrets
- Validate and sanitize any user inputs
- Keep dependencies up to date (check for security vulnerabilities)
- Use environment variables for sensitive configuration
- Follow principle of least privilege for Azure deployments

## Documentation

- Keep README.md updated with major architectural changes
- Document ceremonial/scientific concepts for maintainability
- Add inline comments for complex logic or non-obvious patterns
- Update this instructions file as project evolves
