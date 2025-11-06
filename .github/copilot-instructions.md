# GitHub Copilot Coding Agent Instructions

## Project Overview
This is a Node.js/Express web application that displays haikus. It's based on the Azure node sample (nodejs-docs-hello-world) and serves as a demonstration for GitHub Codespaces. The repository is named "Phoenix_Ignition_TOE" and includes aspirational README content about cosmological modeling, but the actual working code is a simple haiku display application.

## Project Structure
```
Phoenix_Ignition_TOE/
├── .github/              # GitHub configuration and workflows
│   └── workflows/        # CI/CD workflows (Azure, npm publishing)
├── public/              # Static assets (CSS, images, etc.)
├── views/               # EJS templates for rendering pages
├── .gitignore           # Git ignore rules
├── LICENSE              # MIT License
├── README.md            # Project documentation
├── index.js             # Main Express server application
├── haikus.json          # Haiku data store
├── package.json         # Node.js dependencies and scripts
├── package-lock.json    # Locked dependency versions
├── process.json         # PM2 process manager configuration
└── web.config           # IIS/Azure configuration
```

## Technology Stack
- **Runtime**: Node.js
- **Framework**: Express.js (v4.21.2)
- **Template Engine**: EJS (v3.1.10)
- **Development Tools**: nodemon (v2.0.19)

## Coding Standards

### Language and Style
- Use JavaScript (ES6+) for all code
- Use `let` and `const` for variable declarations (avoid `var`)
- Follow existing code style and formatting in the repository
- Keep code simple and readable

### File Organization
- Place server logic in `index.js` or new files in the root directory
- Store static assets in the `public/` directory
- Place EJS templates in the `views/` directory
- Data files (like `haikus.json`) belong in the root directory

### Dependencies
- Use npm for package management
- Install new dependencies with `npm install <package> --save`
- Update `package.json` for any new dependencies
- Avoid adding unnecessary dependencies

## Build and Run

### Installation
```bash
npm install
```

### Running the Application
```bash
# Production mode
npm start

# Development mode with auto-restart
npm run dev
```

The application runs on port 3000 by default (or the PORT environment variable if set).

### Testing
- Currently, there are no automated tests in this repository
- Manual testing: Start the server and navigate to `http://localhost:3000`
- Verify that haikus display correctly

### Linting
- No linter is currently configured
- Follow the existing code style in the repository

## Making Changes

### Code Changes
- Keep changes minimal and focused
- Maintain backward compatibility
- Test changes locally before committing
- Update the README.md if adding new features or changing setup instructions

### Adding New Routes
- Add route handlers in `index.js` following the existing pattern
- Use EJS templates in `views/` for rendering HTML
- Keep routes simple and RESTful

### Modifying Data
- Haiku data is stored in `haikus.json`
- Each haiku has a `text` field (string) and an `image` field (filename)
- Images should be placed in the `public/` directory

### Static Assets
- Place CSS files, images, and JavaScript in the `public/` directory
- Reference them in templates using root-relative paths (e.g., `/style.css`)

## Environment Variables
- `PORT`: Server port (default: 3000)

## Deployment
- The project includes Azure Web Apps deployment workflow in `.github/workflows/azure-webapps-node.yml`
- NPM publishing workflows are available:
  - `.github/workflows/npm-publish.yml` - Publishes to npm registry
  - `.github/workflows/npm-publish-github-packages.yml` - Publishes to GitHub Packages
- The application is configured for IIS/Azure deployment via `web.config`
- PM2 process manager configuration is available in `process.json`

## Important Notes
- This is a simple demonstration application
- No database is used; data is stored in JSON files
- The application does not currently have authentication or user management
- Focus on simplicity and clarity when making changes
