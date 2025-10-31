---
title: "Sui Network API Integration | Grove Web3 Infrastructure"
description: "Complete Sui Network RPC API documentation for developers. Fast, reliable Sui Network blockchain access with Grove's enterprise infrastructure. Get started in minutes."
keywords: [sui, sui, rpc, api, blockchain, web3, grove, infrastructure, developers, integration]
sidebar_position: 1
sidebar_label: sui
slug: /service-apis/sui-api
canonical_url: https://grove.city/docs/service-apis/sui-api
---

# Sui Network API Integration

<div style={{background: "linear-gradient(135deg, #4da6ff 0%, #0066cc 100%)", color: "white", padding: "1.5rem", borderRadius: "8px", margin: "1rem 0"}}>
  <h2 style={{color: "white", marginTop: 0}}>🚀 Quick Start</h2>
  <p style={{marginBottom: 0, fontSize: "1.1rem"}}>Connect to Sui Network in under 5 minutes with Grove's enterprise-grade infrastructure.</p>
</div>

## Overview

Sui is a next-generation smart contract platform with high throughput, low latency, and an asset-oriented programming model powered by the Move programming language.

### Why Choose Grove for Sui Network?

- ⚡ **Ultra-fast response times** - Sub-300ms latency globally
- 📈 **Unlimited RPS and Unlimited relays** - From Prototype to Production seamlessly
- 🌍 **Global edge network** - 99.9% uptime guarantee
- 💡 **Developer-first** - Comprehensive docs and support

## Network Information

| Property | Value |
|----------|-------|
| **Network Name** | Sui Network |
| **Native Token** | SUI |
| **Pocket Service ID** | `sui` |
| **Block Explorer** | [SuiScan](https://suiscan.xyz) |
| **Official Documentation** | [Sui Network Docs](https://docs.sui.io/) |

## Supported APIs

| API | Documentation |
| --- | ------------- |
| **Sui JSON-RPC API** | [view spec](https://docs.sui.io/sui-api-ref) |

## Integration Examples

### Quick Setup with Sui SDK

```javascript
// Using @mysten/sui.js
import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';

const client = new SuiClient({ 
  url: 'YOUR_GROVE_SUI_ENDPOINT' 
});

// Get latest checkpoint
const checkpoint = await client.getLatestCheckpointSequenceNumber();
console.log('Latest checkpoint:', checkpoint);

// Get account balance
const balance = await client.getBalance({
  owner: '0x...' // Sui address
});
console.log('Balance:', balance);
```

## Performance & Reliability

Grove's Sui Network infrastructure delivers:

- **Response Time**: < 100ms average globally
- **Uptime**: 99.9% SLA guarantee  
- **Rate Limits**: Unlimited requests/second on all plans
- **Global Coverage**: Backed by the Unstoppable Pocket Network

## Developer Resources

### 📚 Essential Links
- [Grove API Documentation](../grove-api/overview/grove-api)
- [Sui Network Official Docs](https://docs.sui.io/)
- [Network Status](https://status.grove.city)
- [Developer Discord](https://discord.gg/build-with-grove)

### 🛠️ Tools & SDKs
- [@mysten/sui.js](https://www.npmjs.com/package/@mysten/sui.js)
- [Sui CLI](https://docs.sui.io/build/cli-client)

### 💬 Community & Support
- [GitHub Issues](https://github.com/buildwithgrove/path)  
- [Technical Support](https://discord.com/channels/824324475256438814/1150805396085293106)

## Getting Started

1. **Sign up** for a Grove account at [portal.grove.city](https://portal.grove.city)
2. **Create** a new application and get your API key
3. **Configure** your endpoints with Sui Network
4. **Start building** with our comprehensive documentation

---

<div style={{background: "#f8f9fa", padding: "1rem", borderLeft: "4px solid #007bff", margin: "1rem 0"}}>
  <strong>Need help?</strong> Our developer success team is here to help you integrate Sui Network quickly and efficiently. <a href="mailto:portal@grove.city">Contact us</a> or join our <a href="https://discord.gg/build-with-grove">Discord community</a>.
</div>
