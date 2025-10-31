---
title: "Pocket Network API Integration | Grove Web3 Infrastructure"
description: "Complete Pocket Network RPC API documentation for developers. Fast, reliable Pocket Network blockchain access with Grove's enterprise infrastructure. Get started in minutes."
keywords: [pocket, pokt, rpc, api, blockchain, web3, grove, infrastructure, developers, integration]
sidebar_position: 1
sidebar_label: pocket
slug: /service-apis/pocket-api
canonical_url: https://grove.city/docs/service-apis/pocket-api
---

# Pocket Network API Integration

<div style={{background: "linear-gradient(135deg, #4c51bf 0%, #805ad5 100%)", color: "white", padding: "1.5rem", borderRadius: "8px", margin: "1rem 0"}}>
  <h2 style={{color: "white", marginTop: 0}}>🚀 Quick Start</h2>
  <p style={{marginBottom: 0, fontSize: "1.1rem"}}>Connect to Pocket Network in under 5 minutes with Grove's enterprise-grade infrastructure.</p>
</div>

## Overview

Pocket Network is a decentralized infrastructure protocol dedicated to empowering developers with access to reliable, performant, and cost-effective data. With a focus on open data and infrastructure ownership, Pocket Network serves as a universal RPC infrastructure, enabling developers to seamlessly access data from over 50 blockchain networks through its decentralized network of operators. With Grove, developers can easily connect to Pocket Network's infrastructure, reducing friction and facilitating innovation.

### Why Choose Grove for Pocket Network?

- ⚡ **Ultra-fast response times** - Sub-300ms latency globally
- 📈 **Unlimited RPS and Unlimited relays** - From Prototype to Production seamlessly
- 🌍 **Global edge network** - 99.9% uptime guarantee
- 💡 **Developer-first** - Comprehensive docs and support

## Network Information

| Property | Value |
|----------|-------|
| **Network Name** | Pocket Network |
| **Native Token** | POKT |
| **Cosmos Chain ID** | `pocket` |
| **Pocket Service ID** | `pocket` |
| **Block Explorer** | [POKTScan](https://poktscan.com) |
| **Official Documentation** | [Pocket Network Docs](https://docs.pokt.network/) |

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

const client = await StargateClient.connect('YOUR_GROVE_POCKET_ENDPOINT');

// Get latest block height
const height = await client.getHeight();
console.log('Latest block height:', height);

// Get account info
const account = await client.getAccount('pocket1...');
console.log('Account info:', account);
```

## Performance & Reliability

Grove's Pocket Network infrastructure delivers:

- **Response Time**: < 100ms average globally
- **Uptime**: 99.9% SLA guarantee  
- **Rate Limits**: Unlimited requests/second on all plans
- **Global Coverage**: Backed by the Unstoppable Pocket Network

## Developer Resources

### 📚 Essential Links
- [Grove API Documentation](../grove-api/overview/grove-api)
- [Pocket Network Official Docs](https://docs.pokt.network/)
- [Network Status](https://status.grove.city)
- [Developer Discord](https://discord.gg/build-with-grove)

### 🛠️ Tools & SDKs
- [@cosmjs/stargate](https://www.npmjs.com/package/@cosmjs/stargate)
- [CosmJS](https://github.com/cosmos/cosmjs)
- [Pocket Network SDK](https://docs.pokt.network/)

### 💬 Community & Support
- [GitHub Issues](https://github.com/buildwithgrove/path)  
- [Technical Support](https://discord.com/channels/824324475256438814/1150805396085293106)

## Getting Started

1. **Sign up** for a Grove account at [portal.grove.city](https://portal.grove.city)
2. **Create** a new application and get your API key
3. **Configure** your endpoints with Pocket Network
4. **Start building** with our comprehensive documentation

---

<div style={{background: "#f8f9fa", padding: "1rem", borderLeft: "4px solid #007bff", margin: "1rem 0"}}>
  <strong>Need help?</strong> Our developer success team is here to help you integrate Pocket Network quickly and efficiently. <a href="mailto:portal@grove.city">Contact us</a> or join our <a href="https://discord.gg/build-with-grove">Discord community</a>.
</div>
