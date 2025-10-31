---
title: "Chihuahua Network API Integration | Grove Web3 Infrastructure"
description: "Complete Chihuahua Network RPC API documentation for developers. Fast, reliable Chihuahua Network blockchain access with Grove's enterprise infrastructure. Get started in minutes."
keywords: [chihuahua, huahua, rpc, api, blockchain, web3, grove, infrastructure, developers, integration, cosmos]
sidebar_position: 1
sidebar_label: chihuahua
slug: /service-apis/chihuahua-api
canonical_url: https://grove.city/docs/service-apis/chihuahua-api
---

# Chihuahua Network API Integration

<div style={{background: "linear-gradient(135deg, #4c51bf 0%, #805ad5 100%)", color: "white", padding: "1.5rem", borderRadius: "8px", margin: "1rem 0"}}>
  <h2 style={{color: "white", marginTop: 0}}>🚀 Quick Start</h2>
  <p style={{marginBottom: 0, fontSize: "1.1rem"}}>Connect to Chihuahua Network in under 5 minutes with Grove's enterprise-grade infrastructure.</p>
</div>

## Overview

Chihuahua is a decentralized blockchain network built on the Cosmos SDK, focused on creating a vibrant ecosystem for meme culture and community-driven projects. Known for its fun and engaging approach to blockchain technology, Chihuahua provides a platform for developers to build applications that combine entertainment with decentralized finance. With Grove, developers can easily connect to Chihuahua Network's infrastructure, reducing friction and facilitating innovation.

### Why Choose Grove for Chihuahua Network?

- ⚡ **Ultra-fast response times** - Sub-300ms latency globally
- 📈 **Unlimited RPS and Unlimited relays** - From Prototype to Production seamlessly
- 🌍 **Global edge network** - 99.9% uptime guarantee
- 💡 **Developer-first** - Comprehensive docs and support

## Network Information

| Property | Value |
|----------|-------|
| **Network Name** | Chihuahua Network |
| **Native Token** | HUAHUA |
| **Cosmos Chain ID** | `chihuahua-1` |
| **Pocket Service ID** | `chihuahua` |
| **Block Explorer** | [Chihuahua Explorer](https://www.mintscan.io/chihuahua) |
| **Official Documentation** | [Chihuahua Docs](https://www.chihuahua.wtf/build-on-the-chain) |

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

const client = await StargateClient.connect('YOUR_GROVE_CHIHUAHUA_ENDPOINT');

// Get latest block height
const height = await client.getHeight();
console.log('Latest block height:', height);

// Get account info
const account = await client.getAccount('chihuahua1...');
console.log('Account info:', account);
```

## Performance & Reliability

Grove's Chihuahua Network infrastructure delivers:

- **Response Time**: < 100ms average globally
- **Uptime**: 99.9% SLA guarantee  
- **Rate Limits**: Unlimited requests/second on all plans
- **Global Coverage**: Enterprise-grade infrastructure

## Developer Resources

### 📚 Essential Links
- [Grove API Documentation](../grove-api/overview/grove-api)
- [Chihuahua Network Official Docs](https://docs.chihuahua.wtf/)
- [Network Status](https://status.grove.city)
- [Developer Discord](https://discord.gg/build-with-grove)

### 🛠️ Tools & SDKs
- [@cosmjs/stargate](https://www.npmjs.com/package/@cosmjs/stargate)
- [CosmJS](https://github.com/cosmos/cosmjs)
- [Chihuahua SDK](https://docs.chihuahua.wtf/)

### 💬 Community & Support
- [GitHub Issues](https://github.com/buildwithgrove/path)  
- [Technical Support](https://discord.com/channels/824324475256438814/1150805396085293106)

## Getting Started

1. **Sign up** for a Grove account at [portal.grove.city](https://portal.grove.city)
2. **Create** a new application and get your API key
3. **Configure** your endpoints with Chihuahua Network
4. **Start building** with our comprehensive documentation

---

<div style={{background: "#f8f9fa", padding: "1rem", borderLeft: "4px solid #007bff", margin: "1rem 0"}}>
  <strong>Need help?</strong> Our developer success team is here to help you integrate Chihuahua Network quickly and efficiently. <a href="mailto:portal@grove.city">Contact us</a> or join our <a href="https://discord.gg/build-with-grove">Discord community</a>.
</div>
