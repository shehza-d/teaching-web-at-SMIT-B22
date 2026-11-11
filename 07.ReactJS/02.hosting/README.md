# Deploy React App to Surge

Surge allows you to host your React app for free using the CLI (Command Line Interface).

## Step 1: Build Your React App

Convert your React (JSX) code into production-ready static files.

```bash
npm run build
```

- The production files will be generated in the `dist` folder.
- After making changes to your code, run the build command again.

## Step 2: Preview Your Build (Optional)

Preview how your app will look in production.

```bash
npm run preview
```

## Step 3: Install Surge CLI

Install Surge globally (only required once).

```bash
npm install -g surge
```

## Step 4: Deploy Your App

Run the following command from your project's root directory:

```bash
surge
```

1. **Email & Password:** Create a Surge account or log in (first deployment).
2. **Project:** Confirm the `dist` folder path.
3. **Domain:** Enter a unique domain, e.g. `my-react-app.surge.sh`.
4. Press Enter to deploy!

Your React app is now live!

## Step 5: Update Your Website

Whenever you make changes, **rebuild** and **redeploy**:

```bash
npm run build
surge dist my-react-app.surge.sh
```

Replace `my-react-app.surge.sh` with your actual domain.

## Optional: Automate Deployment

Add this in your `package.json` under scripts for eaiser deployments.

```json
{
	"scripts": {
		"deploy": "surge ./dist --domain my-react-app.surge.sh"
	}
}
```

Now you can use this command each time for deployments after the build command:

```bash
npm run deploy
```

**Important Notes:**

- Only the `dist` folder is deployed, not your source code.
- Your domain must be unique.
- For React Router apps, additional configuration may be required for page refreshes.
