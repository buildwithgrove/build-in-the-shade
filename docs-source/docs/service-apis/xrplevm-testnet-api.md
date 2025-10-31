---
title: "XRPL EVM Testnet API Integration | Grove Web3 Infrastructure"
description: "Complete XRPL EVM Testnet RPC API documentation for developers. Fast, reliable XRPL EVM Testnet blockchain access with Grove's enterprise infrastructure. Get started in minutes."
keywords: [xrplevm-testnet, xrp, rpc, api, blockchain, web3, grove, infrastructure, developers, integration]
sidebar_position: 1
sidebar_label: xrplevm-testnet
slug: /service-apis/xrplevm-testnet-api
canonical_url: https://grove.city/docs/service-apis/xrplevm-testnet-api
---

# XRPL EVM Testnet API Integration

<div style={{background: "linear-gradient(135deg, #000000 0%, #434343 100%)", color: "white", padding: "1.5rem", borderRadius: "8px", margin: "1rem 0"}}>
  <h2 style={{color: "white", marginTop: 0}}>🚀 Quick Start</h2>
  <p style={{marginBottom: 0, fontSize: "1.1rem"}}>Connect to XRPL EVM Testnet in under 5 minutes with Grove's enterprise-grade infrastructure.</p>
</div>

## Overview

The XRP Ledger (XRPL) is The Blockchain Built for Business. The XRPL is a decentralized, public blockchain that has proven reliable for over more than a decade of error-free functioning. The XRPL offers streamlined development, low transaction costs, high performance, and sustainability.

### Why Choose Grove for XRPL EVM Testnet?

- ⚡ **Ultra-fast response times** - Sub-300ms latency globally
- 📈 **Unlimited RPS and Unlimited relays** - From Prototype to Production seamlessly
- 🌍 **Global edge network** - 99.9% uptime guarantee
- 💡 **Developer-first** - Comprehensive docs and support

## Network Information

| Property | Value |
|----------|-------|
| **Network Name** | XRPL EVM Testnet |
| **Native Token** | XRP |
| **Cosmos Chain ID** | `xrplevm_1449000-1` |
| **Pocket Service ID** | `xrplevm-testnet` |
| **Block Explorer** | [XRPL EVM Testnet Explorer](https://explorer.testnet.xrplevm.org/) |
| **Official Documentation** | [XRPL EVM Testnet Docs](https://docs.xrplevm.org) |

## Supported APIs

| API | Documentation |
| --- | ------------- |
| **JSON-RPC** | [view spec](../grove-api/api-definition/definition#json-rpc-supported-methods) |
| **CometBFT API** | [view spec](../grove-api/api-definition/definition#cosmos--cometbft) |
| **Cosmos SDK API** | [view spec](../grove-api/api-definition/definition#cosmos--cometbft) |
| **Websockets** | [view spec](../grove-api/api-definition/definition#websockets) |

## Integration Examples

### Quick Setup with Ethers.js

```javascript
// Using ethers.js for EVM compatibility
import { JsonRpcProvider } from 'ethers';

const provider = new JsonRpcProvider('YOUR_GROVE_XRPLEVM_TESTNET_ENDPOINT');

// Get latest block
const blockNumber = await provider.getBlockNumber();
console.log('Latest block:', blockNumber);

// Get account balance
const balance = await provider.getBalance('0x...');
console.log('Balance:', balance.toString());
```

### WebSocket Connection

```javascript
// Using WebSocket for real-time data
const ws = new WebSocket('YOUR_GROVE_XRPLEVM_TESTNET_WS_ENDPOINT');

ws.on('open', () => {
  ws.send(JSON.stringify({
    method: 'eth_subscribe',
    params: ['newHeads']
  }));
});

ws.on('message', (data) => {
  console.log('New block:', JSON.parse(data));
});
```

## Performance & Reliability

Grove's XRPL EVM Testnet infrastructure delivers:

- **Response Time**: < 100ms average globally
- **Uptime**: 99.9% SLA guarantee  
- **Rate Limits**: Unlimited requests/second on all plans
- **Global Coverage**: Backed by the Unstoppable Pocket Network

## Developer Resources

### 📚 Essential Links
- [Grove API Documentation](../grove-api/overview/grove-api)
- [XRPL EVM Testnet Official Docs](https://xrpl.org/evm-sidechain.html)
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
3. **Configure** your endpoints with XRPL EVM Testnet
4. **Start building** with our comprehensive documentation

---

<div style={{background: "#f8f9fa", padding: "1rem", borderLeft: "4px solid #007bff", margin: "1rem 0"}}>
  <strong>Need help?</strong> Our developer success team is here to help you integrate XRPL EVM Testnet quickly and efficiently. <a href="mailto:portal@grove.city">Contact us</a> or join our <a href="https://discord.gg/build-with-grove">Discord community</a>.
</div>
