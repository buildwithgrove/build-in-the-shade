---
sidebar_position: 2
sidebar_label: Portal Applications
---

# Portal Applications
An Application is your project’s workspace inside Grove — the place where you connect to blockchains, manage keys, monitor usage, and enforce security. Each Application comes with everything you need to build reliably on decentralized infrastructure.

## Core Features

### 🔗 Endpoints
Every Application ships with pre-configured API endpoints. These act as gateways between your app and supported networks — for both reads and writes.

- Copy the endpoint URL directly into your project.
- View supported RPC methods and connection details.
- Mark favorites for quick access.
- Link out to full docs for each chain.

### 📊 Insights & Logs
Stay on top of performance with Insights (requests, usage, latency, reliability) and debug faster with Logs (relay records and error details). Together, they give you a complete picture of how your app interacts with the network.

👉 [Learn more about Insights and Logs](./insights)

### 🛡️ Access Controls
Grove gives you fine-grained tools to protect your app:
- **Secret Key Required** — enforce authentication on every request.
- **Approved Chains** — lock Application access to specific networks.
- **Whitelist Agents & Origins** — allow only trusted user-agents and domains.
- **Whitelist Contracts & Methods** — restrict interactions to approved smart contracts and RPC calls.

👉 [Learn more about Access Controls](./application-security#-access-controls)

### 🗝 Keys
Applications are uniquely identified and secured with keys:

- **Application ID** — your app’s permanent identifier, built into every endpoint URL.
- **Secret Key** — required if Secret Key mode is on; passed via HTTP Basic Auth to ensure only authorized traffic.
Keys can be copied directly in the Portal. Keep them private and rotate periodically to maintain security.

👉 [Learn more about Keys](./application-security#-keys)

### Best Practices
- Always protect **Secret Keys** — never commit them to public repos.
- Restrict access with **whitelists** wherever possible.
- Monitor Insights & Logs regularly to optimize performance.
- Use private endpoints for production — public endpoints are for testing only.

### Why This Matters
Applications aren’t just endpoints — they’re secure, data-driven workspaces that give you the reliability, control, and visibility you need to build at scale on Grove.
