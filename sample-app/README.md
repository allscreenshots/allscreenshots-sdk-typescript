# Allscreenshots demo

A demo web application showcasing the [@allscreenshots/sdk](../sdk) TypeScript SDK.

## Features

- URL input for target website
- Device selector (Desktop HD, iPhone 14, iPad)
- Full page toggle
- Real-time screenshot capture
- Loading states and error handling

## Prerequisites

- Node.js 18 or higher
- pnpm
- An Allscreenshots API key

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Set your API key:

```bash
export ALLSCREENSHOTS_API_KEY=your-api-key
```

## Running the app

### Development mode

Run both the frontend and backend with hot-reload:

```bash
pnpm dev
```

This starts:
- React frontend at http://localhost:5173
- Express backend at http://localhost:3000

### Production mode

Build and run:

```bash
pnpm build
NODE_ENV=production pnpm start
```

Then open http://localhost:3000

## Project structure

```
sample-app/
├── src/
│   ├── server/
│   │   └── index.ts      # Express API server
│   ├── App.tsx           # Main React component
│   ├── main.tsx          # React entry point
│   └── index.css         # Styles
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript config
└── package.json
```

## How it works

1. The React frontend sends screenshot requests to `/api/screenshot`
2. The Express backend uses the `@allscreenshots/sdk` to capture screenshots
3. The backend returns the screenshot as a base64-encoded image
4. The frontend displays the captured screenshot

This architecture keeps the API key secure on the server side.

## Environment variables

| Variable | Description | Required |
|----------|-------------|----------|
| `ALLSCREENSHOTS_API_KEY` | Your Allscreenshots API key | Yes |
| `PORT` | Server port (default: 3000) | No |
| `NODE_ENV` | Set to `production` for production mode | No |

## License

Apache License 2.0
