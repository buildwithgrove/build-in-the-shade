---
title: "NEAR Protocol API Integration | Grove Web3 Infrastructure"
description: "Complete NEAR Protocol RPC API documentation for developers. Fast, reliable NEAR Protocol blockchain access with Grove's enterprise infrastructure. Get started in minutes."
keywords: [near, near, rpc, api, blockchain, web3, grove, infrastructure, developers, integration]
sidebar_position: 1
sidebar_label: near
slug: /service-apis/near-api
canonical_url: https://grove.city/docs/service-apis/near-api
---

# NEAR Protocol API Integration

<div style={{background: "linear-gradient(135deg, #00ec97 0%, #24d05a 100%)", color: "white", padding: "1.5rem", borderRadius: "8px", margin: "1rem 0"}}>
  <h2 style={{color: "white", marginTop: 0}}>🚀 Quick Start</h2>
  <p style={{marginBottom: 0, fontSize: "1.1rem"}}>Connect to NEAR Protocol in under 5 minutes with Grove's enterprise-grade infrastructure.</p>
</div>

## Overview

NEAR is a decentralized application platform designed to make apps usable on the web. The NEAR supported methods allow developers to engage with the NEAR network in a variety of ways including querying balances, executing transactions, and interacting with smart contracts.

### Why Choose Grove for NEAR Protocol?

- ⚡ **Ultra-fast response times** - Sub-300ms latency globally
- 📈 **Unlimited RPS and Unlimited relays** - From Prototype to Production seamlessly
- 🌍 **Global edge network** - 99.9% uptime guarantee
- 💡 **Developer-first** - Comprehensive docs and support

## Network Information

| Property | Value |
|----------|-------|
| **Network Name** | NEAR Protocol |
| **Native Token** | NEAR |
| **Pocket Service ID** | `near` |
| **Block Explorer** | [NEAR Explorer (PIKESPEAK)](https://pikespeak.ai/) |
| **Official Documentation** | [NEAR Protocol Docs](https://docs.near.org/) |

## Supported APIs

| API | Documentation |
| --- | ------------- |
| **JSON-RPC - NEAR RPC API** | [view spec](https://docs.near.org/api/rpc/introduction) |

## Integration Examples

### Quick Setup with near-api-js

```javascript
// Using near-api-js
import { connect, keyStores } from 'near-api-js';

const config = {
  networkId: 'mainnet',
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: 'YOUR_GROVE_NEAR_ENDPOINT',
  walletUrl: 'https://wallet.mainnet.near.org',
  helperUrl: 'https://helper.mainnet.near.org'
};

const near = await connect(config);

// Get account balance
const account = await near.account('example.near');
const balance = await account.getAccountBalance();
console.log('Account balance:', balance);
```

## Performance & Reliability

Grove's NEAR Protocol infrastructure delivers:

- **Response Time**: < 100ms average globally
- **Uptime**: 99.9% SLA guarantee  
- **Rate Limits**: Unlimited requests/second on all plans
- **Global Coverage**: Backed by the Unstoppable Pocket Network

## Developer Resources

### 📚 Essential Links
- [Grove API Documentation](../grove-api/overview/grove-api)
- [NEAR Protocol Official Docs](https://docs.near.org/)
- [Network Status](https://status.grove.city)
- [Developer Discord](https://discord.gg/build-with-grove)

### 🛠️ Tools & SDKs
- [near-api-js](https://www.npmjs.com/package/near-api-js)
- [NEAR CLI](https://docs.near.org/tools/near-cli)

### 💬 Community & Support
- [GitHub Issues](https://github.com/buildwithgrove/path)  
- [Technical Support](https://discord.com/channels/824324475256438814/1150805396085293106)

## Getting Started

1. **Sign up** for a Grove account at [portal.grove.city](https://portal.grove.city)
2. **Create** a new application and get your API key
3. **Configure** your endpoints with NEAR Protocol
4. **Start building** with our comprehensive documentation

---

<div style={{background: "#f8f9fa", padding: "1rem", borderLeft: "4px solid #007bff", margin: "1rem 0"}}>
  <strong>Need help?</strong> Our developer success team is here to help you integrate NEAR Protocol quickly and efficiently. <a href="mailto:portal@grove.city">Contact us</a> or join our <a href="https://discord.gg/build-with-grove">Discord community</a>.
</div>
