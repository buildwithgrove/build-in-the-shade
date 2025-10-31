---
title: "AtomOne Network API Integration | Grove Web3 Infrastructure"
description: "Complete AtomOne Network RPC API documentation for developers. Fast, reliable AtomOne Network blockchain access with Grove's enterprise infrastructure. Get started in minutes."
keywords: [atomone, atone, rpc, api, blockchain, web3, grove, infrastructure, developers, integration, cosmos]
sidebar_position: 1
sidebar_label: atomone
slug: /service-apis/atomone-api
canonical_url: https://grove.city/docs/service-apis/atomone-api
---

# AtomOne Network API Integration

<div style={{background: "linear-gradient(135deg, #4c51bf 0%, #805ad5 100%)", color: "white", padding: "1.5rem", borderRadius: "8px", margin: "1rem 0"}}>
  <h2 style={{color: "white", marginTop: 0}}>🚀 Quick Start</h2>
  <p style={{marginBottom: 0, fontSize: "1.1rem"}}>Connect to AtomOne Network in under 5 minutes with Grove's enterprise-grade infrastructure.</p>
</div>

## Overview

AtomOne is a decentralized blockchain network built on the Cosmos SDK, designed as a minimal and conservative fork focused on maintaining the core principles of the Cosmos Hub. AtomOne emphasizes security, stability, and governance, providing a robust foundation for decentralized applications while preserving the original vision of the Cosmos ecosystem. With Grove, developers can easily connect to AtomOne Network's infrastructure, reducing friction and facilitating innovation.

### Why Choose Grove for AtomOne Network?

- ⚡ **Ultra-fast response times** - Sub-300ms latency globally
- 📈 **Unlimited RPS and Unlimited relays** - From Prototype to Production seamlessly
- 🌍 **Global edge network** - 99.9% uptime guarantee
- 💡 **Developer-first** - Comprehensive docs and support

## Network Information

| Property | Value |
|----------|-------|
| **Network Name** | AtomOne Network |
| **Native Token** | ATONE |
| **Cosmos Chain ID** | `atomone-1` |
| **Pocket Service ID** | `atomone` |
| **Block Explorer** | [AtomOne Explorer](https://www.mintscan.io/atomone) |
| **Official Documentation** | [AtomOne Docs](https://docs.atom.one/) |

## Supported APIs

| API | Documentation |
| --- | ------------- |
| **CometBFT API** | [view spec](../grove-api/api-definition/definition#cosmos--cometbft) |
| **Cosmos SDK API** | [view spec](../grove-api/api-definition/definition#cosmos--cometbft) |

## Integration Examples

### Quick Setup with Cosmos SDK

```javascript
// Using @cosmjs/stargate
import { StargateClient } from '@cosmjs/stargate';

const client = await StargateClient.connect('YOUR_GROVE_ATOMONE_ENDPOINT');

// Get latest block height
const height = await client.getHeight();
console.log('Latest block height:', height);

// Get account info
const account = await client.getAccount('atone1...');
console.log('Account info:', account);
```

## Performance & Reliability

Grove's AtomOne Network infrastructure delivers:

- **Response Time**: < 100ms average globally
- **Uptime**: 99.9% SLA guarantee  
- **Rate Limits**: Unlimited requests/second on all plans
- **Global Coverage**: Enterprise-grade infrastructure

## Developer Resources

### 📚 Essential Links
- [Grove API Documentation](../grove-api/overview/grove-api)
- [AtomOne Network Official Docs](https://github.com/atomone-hub/atomone)
- [Network Status](https://status.grove.city)
- [Developer Discord](https://discord.gg/build-with-grove)

### 🛠️ Tools & SDKs
- [@cosmjs/stargate](https://www.npmjs.com/package/@cosmjs/stargate)
- [CosmJS](https://github.com/cosmos/cosmjs)
- [AtomOne SDK](https://github.com/atomone-hub/atomone)

### 💬 Community & Support
- [GitHub Issues](https://github.com/buildwithgrove/path)  
- [Technical Support](https://discord.com/channels/824324475256438814/1150805396085293106)

## Getting Started

1. **Sign up** for a Grove account at [portal.grove.city](https://portal.grove.city)
2. **Create** a new application and get your API key
3. **Configure** your endpoints with AtomOne Network
4. **Start building** with our comprehensive documentation

---

<div style={{background: "#f8f9fa", padding: "1rem", borderLeft: "4px solid #007bff", margin: "1rem 0"}}>
  <strong>Need help?</strong> Our developer success team is here to help you integrate AtomOne Network quickly and efficiently. <a href="mailto:portal@grove.city">Contact us</a> or join our <a href="https://discord.gg/build-with-grove">Discord community</a>.
</div>
