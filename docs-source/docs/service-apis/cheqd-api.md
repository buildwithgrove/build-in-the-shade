---
title: "Cheqd Network API Integration | Grove Web3 Infrastructure"
description: "Complete Cheqd Network RPC API documentation for developers. Fast, reliable Cheqd Network blockchain access with Grove's enterprise infrastructure. Get started in minutes."
keywords: [cheqd, cheq, rpc, api, blockchain, web3, grove, infrastructure, developers, integration, cosmos, identity]
sidebar_position: 1
sidebar_label: cheqd
slug: /service-apis/cheqd-api
canonical_url: https://grove.city/docs/service-apis/cheqd-api
---

# Cheqd Network API Integration

<div style={{background: "linear-gradient(135deg, #4c51bf 0%, #805ad5 100%)", color: "white", padding: "1.5rem", borderRadius: "8px", margin: "1rem 0"}}>
  <h2 style={{color: "white", marginTop: 0}}>🚀 Quick Start</h2>
  <p style={{marginBottom: 0, fontSize: "1.1rem"}}>Connect to Cheqd Network in under 5 minutes with Grove's enterprise-grade infrastructure.</p>
</div>

## Overview

Cheqd is a decentralized identity network that enables the creation of decentralized identity solutions through verifiable credentials and DIDs (Decentralized Identifiers). Built on the Cosmos SDK, Cheqd provides a secure and scalable infrastructure for digital identity management, allowing developers to build privacy-preserving identity applications. With Grove, developers can easily connect to Cheqd Network's infrastructure, reducing friction and facilitating innovation.

### Why Choose Grove for Cheqd Network?

- ⚡ **Ultra-fast response times** - Sub-300ms latency globally
- 📈 **Unlimited RPS and Unlimited relays** - From Prototype to Production seamlessly
- 🌍 **Global edge network** - 99.9% uptime guarantee
- 💡 **Developer-first** - Comprehensive docs and support

## Network Information

| Property | Value |
|----------|-------|
| **Network Name** | Cheqd Network |
| **Native Token** | CHEQ |
| **Cosmos Chain ID** | `cheqd-mainnet-1` |
| **Pocket Service ID** | `cheqd` |
| **Block Explorer** | [Cheqd Explorer](https://www.mintscan.io/cheqd) |
| **Official Documentation** | [Cheqd Docs](https://docs.cheqd.io/) |

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

const client = await StargateClient.connect('YOUR_GROVE_CHEQD_ENDPOINT');

// Get latest block height
const height = await client.getHeight();
console.log('Latest block height:', height);

// Get account info
const account = await client.getAccount('cheqd1...');
console.log('Account info:', account);
```

## Performance & Reliability

Grove's Cheqd Network infrastructure delivers:

- **Response Time**: < 100ms average globally
- **Uptime**: 99.9% SLA guarantee  
- **Rate Limits**: Unlimited requests/second on all plans
- **Global Coverage**: Enterprise-grade infrastructure

## Developer Resources

### 📚 Essential Links
- [Grove API Documentation](../grove-api/overview/grove-api)
- [Cheqd Network Official Docs](https://docs.cheqd.io/)
- [Network Status](https://status.grove.city)
- [Developer Discord](https://discord.gg/build-with-grove)

### 🛠️ Tools & SDKs
- [@cosmjs/stargate](https://www.npmjs.com/package/@cosmjs/stargate)
- [CosmJS](https://github.com/cosmos/cosmjs)
- [Cheqd SDK](https://docs.cheqd.io/)

### 💬 Community & Support
- [GitHub Issues](https://github.com/buildwithgrove/path)  
- [Technical Support](https://discord.com/channels/824324475256438814/1150805396085293106)

## Getting Started

1. **Sign up** for a Grove account at [portal.grove.city](https://portal.grove.city)
2. **Create** a new application and get your API key
3. **Configure** your endpoints with Cheqd Network
4. **Start building** with our comprehensive documentation

---

<div style={{background: "#f8f9fa", padding: "1rem", borderLeft: "4px solid #007bff", margin: "1rem 0"}}>
  <strong>Need help?</strong> Our developer success team is here to help you integrate Cheqd Network quickly and efficiently. <a href="mailto:portal@grove.city">Contact us</a> or join our <a href="https://discord.gg/build-with-grove">Discord community</a>.
</div>