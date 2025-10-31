# Build In The Shade

Free, high-performance RPC endpoints and validator infrastructure for blockchain developers.

## Features

- **Free RPC Endpoints**: XRPL-EVM Mainnet and Testnet with HTTP and WebSocket support
- **Validators**: Running on XRPL-EVM and Pocket Network
- **Open Source**: Contributing to Pocket Network ecosystem
- **No Rate Limits**: No API keys required

## Tech Stack

- Static HTML/CSS/JavaScript
- Cyberpunk/Outrun aesthetic with cyan/magenta color scheme
- Responsive design with mobile support
- Copy-to-clipboard functionality with visual feedback

## Deploy to Vercel

### Quick Deploy

1. **Import the repository to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import `buildwithgrove/build-in-the-shade`

2. **Configure the project**:
   - Framework Preset: Other
   - Root Directory: `./`
   - Build Command: (leave empty)
   - Output Directory: `./`

3. **Set custom domain** (optional):
   - Go to Project Settings → Domains
   - Add `buildintheshade.com`
   - Configure DNS records as instructed

### Manual Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Local Development

```bash
# Start local server
node server.js

# Or use any static server
npx http-server .
```

## Repository Structure

```
build-in-the-shade/
├── index.html           # Main page
├── header.html          # Header component
├── footer.html          # Footer component
├── vercel.json          # Vercel configuration
├── sitemap.xml          # SEO sitemap
├── robots.txt           # Crawler instructions
├── llms.txt            # AI/LLM information
├── src/
│   ├── js/
│   │   ├── main.js              # Core functionality
│   │   ├── copy-button.js       # Copy button logic
│   │   └── partners-scroll.js   # Infinite scroll
│   └── styles/
│       └── styles.css           # Main stylesheet
└── images/
    ├── bits-logo.png
    ├── services/               # Partner logos
    └── ...
```

## RPC Endpoints

### XRPL-EVM Mainnet
- **HTTP**: `https://xrplevm.buildintheshade.com`
- **WSS**: `wss://xrplevm.buildintheshade.com`

### XRPL-EVM Testnet
- **HTTP**: `https://xrplevm-testnet.buildintheshade.com`
- **WSS**: `wss://xrplevm-testnet.buildintheshade.com`

## License

© Grove Redefines Our Very Existence Inc.

## Links

- Website: [buildintheshade.com](https://buildintheshade.com)
- GitHub: [buildwithgrove](https://github.com/buildwithgrove)
- Discord: [build-with-grove](https://discord.gg/build-with-grove)
- Twitter: [@BuildWithGrove](https://x.com/BuildWithGrove)
