---
title: "TRON API Integration | Grove Web3 Infrastructure"
description: "Complete TRON RPC API documentation for developers. Fast, reliable TRON blockchain access with Grove's enterprise infrastructure. Get started in minutes."
keywords: [tron, trx, rpc, api, blockchain, web3, grove, infrastructure, developers, integration]
sidebar_position: 1
sidebar_label: tron
slug: /service-apis/tron-api
canonical_url: https://grove.city/docs/service-apis/tron-api
---

# TRON API Integration

<div style={{background: "linear-gradient(135deg, #ff060a 0%, #ff4757 100%)", color: "white", padding: "1.5rem", borderRadius: "8px", margin: "1rem 0"}}>
  <h2 style={{color: "white", marginTop: 0}}>🚀 Quick Start</h2>
  <p style={{marginBottom: 0, fontSize: "1.1rem"}}>Connect to TRON in under 5 minutes with Grove's enterprise-grade infrastructure.</p>
</div>

## Overview

TRON is an ambitious project dedicated to the establishment of a truly decentralized Internet and its infrastructure. The TRON Protocol, one of the largest blockchain-based operating systems in the world, offers public blockchain support of high throughput, high scalability, and high availability for all Decentralized Applications (DApps) in the TRON ecosystem.

### Why Choose Grove for TRON?

- ⚡ **Ultra-fast response times** - Sub-300ms latency globally
- 📈 **Unlimited RPS and Unlimited relays** - From Prototype to Production seamlessly
- 🌍 **Global edge network** - 99.9% uptime guarantee
- 💡 **Developer-first** - Comprehensive docs and support

## Network Information

| Property | Value |
|----------|-------|
| **Network Name** | TRON |
| **Native Token** | TRX |
| **EVM Chain ID** | `728126428` |
| **Pocket Service ID** | `tron` |
| **Block Explorer** | [TRONSCAN](https://tronscan.org) |
| **Official Documentation** | [TRON Docs](https://developers.tron.network/) |

## Supported APIs

| API | Documentation |
| --- | ------------- |
| **TRON JSON-RPC** | [view spec](https://developers.tron.network/reference/json-rpc-api-overview) |

## Integration Examples

### Quick Setup with TronWeb

```javascript
// Using TronWeb
import TronWeb from 'tronweb';

const tronWeb = new TronWeb({
  fullHost: 'YOUR_GROVE_TRON_ENDPOINT'
});

// Get latest block
const block = await tronWeb.trx.getCurrentBlock();
console.log('Latest block:', block);

// Get account balance
const balance = await tronWeb.trx.getBalance('TR...');
console.log('Balance:', balance, 'SUN');
```

## Performance & Reliability

Grove's TRON infrastructure delivers:

- **Response Time**: < 100ms average globally
- **Uptime**: 99.9% SLA guarantee  
- **Rate Limits**: Unlimited requests/second on all plans
- **Global Coverage**: Backed by the Unstoppable Pocket Network

## Developer Resources

### 📚 Essential Links
- [Grove API Documentation](../grove-api/overview/grove-api)
- [TRON Official Docs](https://developers.tron.network/)
- [Network Status](https://status.grove.city)
- [Developer Discord](https://discord.gg/build-with-grove)

### 🛠️ Tools & SDKs
- [TronWeb](https://www.npmjs.com/package/tronweb)
- [TRON CLI](https://developers.tron.network/)

### 💬 Community & Support
- [GitHub Issues](https://github.com/buildwithgrove/path)  
- [Technical Support](https://discord.com/channels/824324475256438814/1150805396085293106)

## Getting Started

1. **Sign up** for a Grove account at [portal.grove.city](https://portal.grove.city)
2. **Create** a new application and get your API key
3. **Configure** your endpoints with TRON
4. **Start building** with our comprehensive documentation

---

<div style={{background: "#f8f9fa", padding: "1rem", borderLeft: "4px solid #007bff", margin: "1rem 0"}}>
  <strong>Need help?</strong> Our developer success team is here to help you integrate TRON quickly and efficiently. <a href="mailto:portal@grove.city">Contact us</a> or join our <a href="https://discord.gg/build-with-grove">Discord community</a>.
</div>
