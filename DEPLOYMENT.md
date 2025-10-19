# 🚀 Deployment Guide - Communal Ignition

This guide details how to deploy **Phoenix Ignition** to various hosting platforms, transforming each into a flame altar where the ceremony can be witnessed by all.

---

## 🔥 Overview: Deployment as Ritual

Deployment is not merely technical—it is a communal act:
- Each push is a spark
- Each build is a breath
- Each release is an ignition

Our application is designed for simple, frictionless deployment to modern cloud platforms.

---

## 📋 Pre-Deployment Checklist

Before igniting in production:

- [ ] All tests passing (`npm test`)
- [ ] Security audit reviewed (`npm audit`)
- [ ] Environment variables documented
- [ ] Configuration verified for production
- [ ] Dependencies up to date

---

## 🌐 Heroku Deployment - The Primary Altar

Heroku provides a simple platform for deploying Node.js applications.

### Prerequisites
- [Heroku account](https://signup.heroku.com/)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed
- Git repository initialized

### Step-by-Step Ignition

#### 1. Login to Heroku
```bash
heroku login
```

#### 2. Create Your Flame Altar
```bash
# Create a new Heroku app
heroku create your-phoenix-ignition

# This generates a unique URL like:
# https://your-phoenix-ignition.herokuapp.com
```

#### 3. Configure Environment Variables
```bash
# Set production mode
heroku config:set NODE_ENV=production

# Verify configuration
heroku config
```

#### 4. Deploy the Ceremony
```bash
# Push to Heroku (triggers automatic build)
git push heroku main

# Or if you're on a different branch:
git push heroku your-branch:main
```

#### 5. Verify the Ignition
```bash
# Open in browser
heroku open

# Check logs for any issues
heroku logs --tail
```

### Heroku Configuration Details

**Buildpack**: Node.js (auto-detected)  
**Start Command**: `npm start` (from package.json)  
**Port**: Automatically provided via `PORT` environment variable

### Scaling the Ceremony
```bash
# Scale to multiple dynos for higher traffic
heroku ps:scale web=2

# Check current scale
heroku ps
```

---

## ☁️ Alternative Platforms

### Render

[Render](https://render.com/) offers free hosting with automatic deploys.

#### Setup
1. Sign up at render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: phoenix-ignition
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment Variables**:
     - `NODE_ENV=production`

#### Deploy
- Automatic on every push to main branch
- Manual deploy via Render dashboard

---

### Railway

[Railway](https://railway.app/) provides simple deployments with GitHub integration.

#### Setup
1. Sign up at railway.app
2. Click "New Project" → "Deploy from GitHub repo"
3. Select Phoenix_Ignition_TOE
4. Railway auto-detects Node.js and configures

#### Environment Variables
```bash
NODE_ENV=production
```

#### Deploy
- Automatic on every push
- View logs in Railway dashboard

---

### Vercel

[Vercel](https://vercel.com/) excels at hosting Node.js applications.

#### Setup
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project directory
vercel

# Deploy to production
vercel --prod
```

#### Configuration (vercel.json)
```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js"
    }
  ]
}
```

---

## 🐳 Docker Deployment

For containerized deployments, we provide a Dockerfile.

### Create Dockerfile
```dockerfile
# Ceremonial Container Definition
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy ceremonial dependencies
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application files
COPY . .

# Expose the altar port
EXPOSE 3000

# Set environment
ENV NODE_ENV=production

# Ignite the ceremony
CMD ["npm", "start"]
```

### Build and Run
```bash
# Build the ceremonial container
docker build -t phoenix-ignition .

# Run locally
docker run -p 3000:3000 phoenix-ignition

# Run with environment variables
docker run -p 3000:3000 -e NODE_ENV=production phoenix-ignition
```

### Deploy to Container Platforms
- **AWS ECS**: Upload to ECR, create ECS task
- **Google Cloud Run**: Push to GCR, deploy service
- **Azure Container Instances**: Push to ACR, create instance

---

## 🔐 Environment Variables

Our application uses these ceremonial parameters:

| Variable | Purpose | Default | Required |
|----------|---------|---------|----------|
| `PORT` | Server listening port | 3000 | No (auto-set on most platforms) |
| `NODE_ENV` | Environment mode | development | Recommended for production |

### Setting Environment Variables

**Heroku:**
```bash
heroku config:set VAR_NAME=value
```

**Render/Railway:**
- Set in dashboard UI under Environment Variables

**Docker:**
```bash
docker run -e VAR_NAME=value image-name
```

---

## 📊 Monitoring and Logs

### Heroku Logs
```bash
# Tail logs in real-time
heroku logs --tail

# View recent logs
heroku logs --num 500
```

### Application Health Check
```bash
# Check if app is responding
curl https://your-app.herokuapp.com/

# Expected: 200 OK with haiku content
```

### Monitoring Services
Consider integrating:
- **New Relic** - Performance monitoring
- **Sentry** - Error tracking
- **LogDNA** - Log aggregation

---

## 🔄 Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Heroku

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Run tests
        run: |
          npm install
          npm test
      
      - name: Deploy to Heroku
        uses: akhileshns/heroku-deploy@v3.12.12
        with:
          heroku_api_key: ${{secrets.HEROKU_API_KEY}}
          heroku_app_name: "your-phoenix-ignition"
          heroku_email: "your-email@example.com"
```

---

## 🆘 Troubleshooting

### Application Won't Start
```bash
# Check logs
heroku logs --tail

# Common issues:
# - PORT not bound correctly (ensure using process.env.PORT)
# - Dependencies not installed (check package.json)
# - Build errors (review build logs)
```

### Tests Failing in CI
```bash
# Run tests locally first
npm test

# Check for environment-specific issues
# Ensure all dependencies are in package.json
```

### Performance Issues
```bash
# Check dyno metrics
heroku ps

# Consider scaling
heroku ps:scale web=2

# Review logs for bottlenecks
heroku logs --tail | grep "slow"
```

---

## 🔮 Post-Deployment

After successful ignition:

1. **Verify functionality**: Visit the live URL
2. **Monitor logs**: Watch for errors
3. **Share the flame**: Announce the deployment
4. **Document the URL**: Update README if needed

---

## 📚 Additional Resources

- [Heroku Node.js Guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Express Production Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html)
- [Node.js Deployment Checklist](https://github.com/i0natan/nodebestpractices#6-going-to-production-practices)

---

*May your deployments be swift,*  
*Your servers stable,*  
*And your ceremonies witnessed by many.*

**🔥 Happy deploying! ✨**
