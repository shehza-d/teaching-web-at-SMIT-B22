# Deploy React Router App to Surge

React Router apps need an additional configuration to prevent **404 errors when refreshing pages or opening routes directly**.

## Step 1: Build Your React App

```bash
npm run build
```

The production files will be generated in the `dist` folder.

## Step 2: Configure React Router Fallback

Surge uses a `200.html` file to handle client-side routing.

Copy `index.html` to `200.html` inside the `dist` folder:

```bash
cp dist/index.html dist/200.html
```

**Why?**

Without this file, refreshing a route like `/about` or `/contact` may show a 404 error.

The `200.html` file allows Surge to serve your React app, and React Router handles the correct page.

## Step 4: Deploy Your App

```bash
surge
```

1. Enter your email and password (first time only).
2. Confirm the project directory (`dist`).
3. Enter a unique domain, e.g. `my-router-app.surge.sh`.
4. Press Enter to deploy.

## Step 5: Update Your Website

Whenever you change your React code, rebuild and redeploy:

```bash
npm run build
cp dist/index.html dist/200.html
surge dist my-router-app.surge.sh
```

Replace the domain with your actual Surge domain.

## Optional: Automate Deployment

Add the following scripts to your `package.json`:

```json
{
	"scripts": {
		"build": "vite build",
		"deploy": "npm run build && cp dist/index.html dist/200.html && surge dist my-router-app.surge.sh"
	}
}
```

Now deploy with a single command:

```bash
npm run deploy
```

**Important Notes:**

- Use `200.html` for React Router apps using `BrowserRouter`.
- Always create `200.html` **after** running `npm run build`, because rebuilding replaces the `dist` folder.
- If using `HashRouter`, this fallback configuration is generally unnecessary.
