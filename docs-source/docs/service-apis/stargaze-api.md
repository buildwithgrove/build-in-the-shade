---
title: "Stargaze Network API Integration | Grove Web3 Infrastructure"
description: "Complete Stargaze Network RPC API documentation for developers. Fast, reliable Stargaze Network blockchain access with Grove's enterprise infrastructure. Get started in minutes."
keywords: [stargaze, stars, rpc, api, blockchain, web3, grove, infrastructure, developers, integration, cosmos, nft]
sidebar_position: 1
sidebar_label: stargaze
slug: /service-apis/stargaze-api
canonical_url: https://grove.city/docs/service-apis/stargaze-api
---

# Stargaze Network API Integration

<div style={{background: "linear-gradient(135deg, #4c51bf 0%, #805ad5 100%)", color: "white", padding: "1.5rem", borderRadius: "8px", margin: "1rem 0"}}>
  <h2 style={{color: "white", marginTop: 0}}>🚀 Quick Start</h2>
  <p style={{marginBottom: 0, fontSize: "1.1rem"}}>Connect to Stargaze Network in under 5 minutes with Grove's enterprise-grade infrastructure.</p>
</div>

## Overview

Stargaze is a decentralized social and NFT platform built on the Cosmos SDK, designed to empower creators and collectors in the Web3 ecosystem. Stargaze provides a comprehensive marketplace for NFTs, social features, and creator tools, enabling users to mint, trade, and discover digital assets in a community-driven environment. With Grove, developers can easily connect to Stargaze Network's infrastructure, reducing friction and facilitating innovation.

### Why Choose Grove for Stargaze Network?

- ⚡ **Ultra-fast response times** - Sub-300ms latency globally
- 📈 **Unlimited RPS and Unlimited relays** - From Prototype to Production seamlessly
- 🌍 **Global edge network** - 99.9% uptime guarantee
- 💡 **Developer-first** - Comprehensive docs and support

## Network Information

| Property | Value |
|----------|-------|
| **Network Name** | Stargaze Network |
| **Native Token** | STARS |
| **Cosmos Chain ID** | `stargaze-1` |
| **Pocket Service ID** | `stargaze` |
| **Block Explorer** | [Stargaze Explorer](https://www.mintscan.io/stargaze) |
| **Official Documentation** | [Stargaze Docs](https://docs.stargaze.zone/) |

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

const client = await StargateClient.connect('YOUR_GROVE_STARGAZE_ENDPOINT');

// Get latest block height
const height = await client.getHeight();
console.log('Latest block height:', height);

// Get account info
const account = await client.getAccount('stars1...');
console.log('Account info:', account);
```

## Performance & Reliability

Grove's Stargaze Network infrastructure delivers:

- **Response Time**: < 100ms average globally
- **Uptime**: 99.9% SLA guarantee  
- **Rate Limits**: Unlimited requests/second on all plans
- **Global Coverage**: Enterprise-grade infrastructure

## Developer Resources

### 📚 Essential Links
- [Grove API Documentation](../grove-api/overview/grove-api)
- [Stargaze Network Official Docs](https://docs.stargaze.zone/)
- [Network Status](https://status.grove.city)
- [Developer Discord](https://discord.gg/build-with-grove)

### 🛠️ Tools & SDKs
- [@cosmjs/stargate](https://www.npmjs.com/package/@cosmjs/stargate)
- [CosmJS](https://github.com/cosmos/cosmjs)
- [Stargaze SDK](https://docs.stargaze.zone/)

### 💬 Community & Support
- [GitHub Issues](https://github.com/buildwithgrove/path)  
- [Technical Support](https://discord.com/channels/824324475256438814/1150805396085293106)

## Getting Started

1. **Sign up** for a Grove account at [portal.grove.city](https://portal.grove.city)
2. **Create** a new application and get your API key
3. **Configure** your endpoints with Stargaze Network
4. **Start building** with our comprehensive documentation

---

<div style={{background: "#f8f9fa", padding: "1rem", borderLeft: "4px solid #007bff", margin: "1rem 0"}}>
  <strong>Need help?</strong> Our developer success team is here to help you integrate Stargaze Network quickly and efficiently. <a href="mailto:portal@grove.city">Contact us</a> or join our <a href="https://discord.gg/build-with-grove">Discord community</a>.
</div>