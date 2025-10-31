---
sidebar_position: 3
sidebar_label: Application Security
---

# Application Security
Every Application in Grove comes with built-in tools to secure access and control how it interacts with supported networks. Security is enforced through keys and a set of fine-grained access controls, giving you both flexibility and protection.

## 🔑 Keys
Keys identify and secure your Application.

- **App ID** — A permanent identifier built into every endpoint URL. Used to route requests correctly.
- **Secret Key** — A private credential used when “Secret Key Required” mode is enabled. Must be passed via **HTTP Basic Auth** to authenticate requests.

### Managing Keys
- Keys can be copied from the Portal (via the copy icon).
- Secret Keys are hidden by default — click the eye icon to reveal.
- Treat your Secret Key like a password: keep it private, rotate periodically, and never commit it to public repos.

## 🛡️ Access Controls
Tailor how your Application can be used:
- **Secret Key Required** — Enforce authentication for every request. Only clients with your Secret Key will be allowed.
- **Approved Chains** — Restrict access to specific blockchain networks.
- **Whitelist User-Agents** — Only allow trusted HTTP User-Agents.
- **Whitelist Origins** — Only allow requests from approved domains.
- **Whitelist Contracts** — Limit calls to specified smart contract addresses.
- **Whitelist Methods** — Restrict available RPC methods to a safe subset.
Each setting can be enabled, edited, or removed directly in the Application’s Security tab.

## ✅ Best Practices
- Always enable **Secret Key Required** for production apps.
- Combine **Secret Keys** with **whitelists** for layered security.
- Rotate Secret Keys periodically and after any suspected exposure.
- Limit your Application to only the **chains, contracts, and methods** it truly needs.

### Why It Matters
Grove’s security model keeps your infrastructure both flexible and safe: open enough to support any integration, locked down enough to protect against abuse.
