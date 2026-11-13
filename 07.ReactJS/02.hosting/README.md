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
npm i -g surge
```

## Step 4: Log In to Surge

Log in before your first deployment:

```bash
surge login
```

- Enter your **email address** and **password**.
- Password is not show while typing.
- If the email is new, Surge creates an account automatically.
- You can also log in through your browser with `surge login --browser`.
- Run `surge whoami` to confirm that you are logged in.
- New users should run `surge verify` and verify their email address.

## Step 5: Deploy Your App

Run this command from your project's root directory:

```bash
surge ./dist example-app-shehzad.surge.sh
```

Replace `example-app-shehzad.surge.sh` with your actual domain.

Your React app is now live!

**Note:** Surge saves the domain in `dist/CNAME`. Move it to `public` so Vite keeps it after future builds:

## Step 6: Update Your Website

Whenever you make changes, **rebuild** and **redeploy**:

```bash
npm run build
surge ./dist example-app-shehzad.surge.sh
```

## Optional: Automate Deployment

Add this in your `package.json` under scripts for easier deployments:

```json
{
	"scripts": {
		"deploy": "surge ./dist my-react-app.surge.sh"
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
- For React Router apps, [additional configuration](./react-router.md) may be required for page refreshes.

## Remove a Published Website

To remove your website from Surge, run:

```bash
surge my-react-app.surge.sh teardown
```

Replace the example domain with your actual domain. This command takes the website offline, so use it carefully.
