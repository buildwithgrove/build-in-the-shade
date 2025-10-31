---
sidebar_position: 1
sidebar_label: Grove API
---

# Grove API Overview
The Grove API leverages PATH as the performance layer on top of permissionless protocols, acting as a vital link between the user and the underlying services. As the first gateway on Pocket Network, we are committed to delivering enterprise grade service while upholding the value of a permissionless internet. With authentication, structured endpoints, and robust performance, the Grove API is built for scale, security, and simplicity.

## 🔎 API Structure
The Grove API is organized around Applications:
- **Account** → the organizational layer that owns Applications
- **Application** → your project’s workspace, including endpoints, keys, and security controls
- **Endpoint** → the specific RPC URL used to interact with a service's API.

Every request flows through this hierarchy:
Account → Application → Endpoint

This structure ensures isolation, visibility, and control for every project you run on Grove.

## 🔐 Authentication
Secure access is built into the API. Authentication depends on your Application’s security configuration:
- **App ID** — embedded in your endpoint URL, routes requests correctly.
- **Secret Key** — required when “Secret Key Required” mode is enabled. Must be passed using HTTP Basic Auth.

Example:
```bash
curl -X POST https://<SERVICE>.gateway.grove.city/v1/<APP_ID> \
-H "Authorization: {app_secret_key}" -H "Content-Type: application/json" \
...
```

### Best Practices
- Always enable **Secret Key Required** for production apps.
- Rotate keys periodically and after suspected exposure.
- Never commit keys to public repos.

## 🌐 Chain Endpoints
Each supported blockchain network has a dedicated endpoint format. Endpoints map your Application to a specific chain, enabling both reads and writes.

### Structure:
```bash
https://<SERVICE>.gateway.grove.city/v1/<APP_ID>
```
- `<SERVICE>` — shorthand identifier for the target service (For Example: `eth`, `poly`, etc).
- `<APP_ID>` — your Application’s unique identifier.

### Example:
```bash
curl -X POST https://eth.gateway.grove.city/v1/6a01d3c0 \
-H "Content-Type: application/json" \
'{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "eth_blockNumber",
  "params": []
}'
```

## ✅ Best Practices
- Use **private endpoints** for production — public endpoints are for testing only.
- Pair **App ID + Secret Key** for stronger security.
- Monitor **Insights and Logs** to track usage, latency, and errors.
- Restrict endpoints with whitelists to prevent unauthorized traffic.

### Why It Matters
The Grove API isn’t just another RPC gateway — it’s a high-performance, decentralized access layer with **security, observability, and scale baked in**. From authentication to endpoints, every part of the Grove API is designed to give you confidence and control.
