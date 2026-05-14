# DRISHANTI V2 - Clean React + Vite Project

This project is a clean, optimized version of the Drishanti frontend, ready for deployment.

## 🚀 Local Development
1. `cd drishanti-v2`
2. `npm install`
3. `npm run dev`

## 🛠 Deployment Options

### 1. GitHub Pages (Render Build Directly)
1. In `vite.config.js`, if your repo is `https://github.com/user/repo-name`, change `base: './'` to `base: '/repo-name/'`.
2. Run `npm run build`.
3. Push the `dist` folder to a `gh-pages` branch or upload it to the GitHub Pages settings.
4. **Tip:** Use the [gh-pages](https://www.npmjs.com/package/gh-pages) npm package for 1-click deploys.

### 2. Django Backend (Serve Build)
1. Run `npm run build`.
2. Copy the contents of the `dist` folder to your Django project's `static` directory.
3. In your Django `views.py`, point your root template to the `index.html` from the `dist` folder.
4. Ensure `STATICFILES_DIRS` in `settings.py` includes the path to the `dist` assets.

### 3. Vercel
1. The `vercel.json` file is already included to handle React Router refreshes.
2. Just push to GitHub and import the project into Vercel.

## 🛡 Features
- **Error Boundaries:** Every major section is wrapped in an Error Boundary to prevent full-page crashes.
- **Relative Paths:** Configured to work regardless of the subfolder it's hosted in.
- **Clean Structure:** No legacy configuration bloat.
