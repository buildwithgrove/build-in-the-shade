---
title: "Boba Network API Integration | Grove Web3 Infrastructure"
description: "Complete Boba Network RPC API documentation for developers. Fast, reliable Boba Network blockchain access with Grove's enterprise infrastructure. Get started in minutes."
keywords: [boba, eth, rpc, api, blockchain, web3, grove, infrastructure, developers, integration]
sidebar_position: 1
sidebar_label: boba
slug: /service-apis/boba-api
canonical_url: https://grove.city/docs/service-apis/boba-api
---

# Boba Network API Integration

<div style={{background: "linear-gradient(135deg, #cbfe00 0%, #00d4aa 100%)", color: "white", padding: "1.5rem", borderRadius: "8px", margin: "1rem 0"}}>
  <h2 style={{color: "white", marginTop: 0}}>🚀 Quick Start</h2>
  <p style={{marginBottom: 0, fontSize: "1.1rem"}}>Connect to Boba Network in under 5 minutes with Grove's enterprise-grade infrastructure.</p>
</div>

## Overview

Boba Network provides a robust blockchain platform for decentralized applications. Grove delivers enterprise-grade Boba Network RPC access with guaranteed uptime, global edge network, and developer-first tooling.

### Why Choose Grove for Boba Network?

- ⚡ **Ultra-fast response times** - Sub-300ms latency globally
- 📈 **Unlimited RPS and Unlimited relays** - From Prototype to Production seamlessly
- 🌍 **Global edge network** - 99.9% uptime guarantee
- 💡 **Developer-first** - Comprehensive docs and support

## Network Information

| Property | Value |
|----------|-------|
| **Network Name** | Boba Network |
| **Native Token** | BOBA |
| **EVM Chain ID** | `288` |
| **Pocket Service ID** | `boba` |
| **Block Explorer** | [Bobascan](https://bobascan.com) |
| **Official Documentation** | [Boba Network Docs](https://docs.boba.network/) |

## Supported API Methods

### 🔌 JSON-RPC API
Access the complete Boba Network RPC specification with full method support.

| Method Category | Description | Documentation |
|-----------------|-------------|---------------|
| **Standard RPC** | Core blockchain methods | [View Methods](../grove-api/api-definition/definition#json-rpc-supported-methods) |

## Integration Examples

### Quick Setup

```javascript
// Using ethers.js (for EVM-compatible chains)
import { JsonRpcProvider } from 'ethers';

const provider = new JsonRpcProvider('YOUR_GROVE_BOBA_ENDPOINT');

// Get latest block
const blockNumber = await provider.getBlockNumber();
console.log('Latest block:', blockNumber);

// Get account balance
const balance = await provider.getBalance('WALLET_ADDRESS');
console.log('Balance:', balance.toString());
```

## Performance & Reliability

Grove's Boba Network infrastructure delivers:

- **Response Time**: < 100ms average globally
- **Uptime**: 99.9% SLA guarantee  
- **Rate Limits**: Unlimited requests/second on all plans
- **Global Coverage**: Backed by the Unstoppable Pocket Network

## Developer Resources

### 📚 Essential Links
- [Grove API Documentation](../grove-api/overview/grove-api)
- [Boba Network Official Docs](https://docs.boba.network/)
- [Network Status](https://status.grove.city)
- [Developer Discord](https://discord.gg/build-with-grove)

### 🛠️ Tools & SDKs
- [Ethers.js](https://docs.ethers.io/)
- [Web3.js](https://web3js.readthedocs.io/)

### 💬 Community & Support
- [GitHub Issues](https://github.com/buildwithgrove/path)  
- [Technical Support](https://discord.com/channels/824324475256438814/1150805396085293106)

## Getting Started

1. **Sign up** for a Grove account at [portal.grove.city](https://portal.grove.city)
2. **Create** a new application and get your API key
3. **Configure** your endpoints with Boba Network
4. **Start building** with our comprehensive documentation

---

<div style={{background: "#f8f9fa", padding: "1rem", borderLeft: "4px solid #007bff", margin: "1rem 0"}}>
  <strong>Need help?</strong> Our developer success team is here to help you integrate Boba Network quickly and efficiently. <a href="mailto:portal@grove.city">Contact us</a> or join our <a href="https://discord.gg/build-with-grove">Discord community</a>.
</div>
