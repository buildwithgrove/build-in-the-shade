---
title: "Hyperliquid API Integration | Grove Web3 Infrastructure"
description: "Complete Hyperliquid RPC API documentation for developers. Fast, reliable Hyperliquid blockchain access with Grove's enterprise infrastructure. Get started in minutes."
keywords: [hyperliquid, eth, rpc, api, blockchain, web3, defi, trading, evm, grove, infrastructure, developers, integration]
sidebar_position: 1
sidebar_label: hyperliquid
slug: /service-apis/hyperliquid-api
canonical_url: https://grove.city/docs/service-apis/hyperliquid-api
---

# Hyperliquid API Integration

<div style={{background: "linear-gradient(135deg, #00d4ff 0%, #007bff 100%)", color: "white", padding: "1.5rem", borderRadius: "8px", margin: "1rem 0"}}>
  <h2 style={{color: "white", marginTop: 0}}>🚀 Quick Start</h2>
  <p style={{marginBottom: 0, fontSize: "1.1rem"}}>Connect to Hyperliquid in under 5 minutes with Grove's enterprise-grade infrastructure.</p>
</div>

## Overview

Hyperliquid is a high-performance decentralized exchange and trading platform built on its own EVM-compatible L1 blockchain. Grove provides enterprise-grade Hyperliquid RPC access with guaranteed uptime, global edge network, and developer-first tooling.

### Why Choose Grove for Hyperliquid?

- ⚡ **Ultra-fast response times** - Sub-300ms latency globally
- 📈 **Unlimited RPS and Unlimited relays** - From Prototype to Production seamlessly
- 🌍 **Global edge network** - 99.9% uptime guarantee
- 💡 **Developer-first** - Comprehensive docs and support

## Network Information

| Property | Value |
|----------|-------|
| **Network Name** | Hyperliquid |
| **Native Token** | HYPE |
| **EVM Chain ID** | `999` |
| **Pocket Service ID** | `hyperliquid` |
| **Block Explorer** | [Hyperliquid Explorer](https://app.hyperliquid.xyz/explorer) |
| **Official Documentation** | [Hyperliquid Docs](https://hyperliquid.gitbook.io/hyperliquid-docs) |

## Supported APIs

| API | Documentation |
| --- | ------------- |
| **JSON-RPC** | [view spec](../grove-api/api-definition/definition#json-rpc-supported-methods) |

## Integration Examples

### Quick Setup

```javascript
// Using ethers.js (for EVM-compatible chains)
import { JsonRpcProvider } from 'ethers';

const provider = new JsonRpcProvider('YOUR_GROVE_HYPERLIQUID_ENDPOINT');

// Get latest block
const blockNumber = await provider.getBlockNumber();
console.log('Latest block:', blockNumber);

// Get account balance
const balance = await provider.getBalance('WALLET_ADDRESS');
console.log('Balance:', balance.toString());
```

### Smart Contract Interaction

```javascript
// Contract interaction example
const contractABI = [...]; // Your contract ABI
const contractAddress = '0x...'; // Your contract address

const contract = new Contract(contractAddress, contractABI, provider);

// Read contract data
const result = await contract.someReadMethod();

// Write to contract (requires signer)
const signer = provider.getSigner();
const contractWithSigner = contract.connect(signer);
const tx = await contractWithSigner.someWriteMethod(param1, param2);
await tx.wait(); // Wait for confirmation
```

## Performance & Reliability

Grove's Hyperliquid infrastructure delivers:

- **Response Time**: < 100ms average globally
- **Uptime**: 99.9% SLA guarantee
- **Rate Limits**: Unlimited requests/second on all plans
- **Global Coverage**: Backed by the Unstoppable Pocket Network

## Developer Resources

### 📚 Essential Links
- [Grove API Documentation](../grove-api/overview/grove-api)
- [Hyperliquid Official Docs](https://hyperliquid.gitbook.io/hyperliquid-docs)
- [Network Status](https://status.grove.city)
- [Developer Discord](https://discord.gg/build-with-grove)

### 🛠️ Tools & SDKs
- [Ethers.js](https://docs.ethers.io/)
- [Web3.js](https://web3js.readthedocs.io/)
- [Hardhat](https://hardhat.org/)
- [Foundry](https://getfoundry.sh/)

### 💬 Community & Support
- [GitHub Issues](https://github.com/buildwithgrove/path)
- [Technical Support](https://discord.com/channels/824324475256438814/1150805396085293106)

## Getting Started

1. **Sign up** for a Grove account at [portal.grove.city](https://portal.grove.city)
2. **Create** a new application and get your API key
3. **Configure** your endpoints with Hyperliquid
4. **Start building** with our comprehensive documentation

---

<div style={{background: "#f8f9fa", padding: "1rem", borderLeft: "4px solid #007bff", margin: "1rem 0"}}>
  <strong>Need help?</strong> Our developer success team is here to help you integrate Hyperliquid quickly and efficiently. <a href="mailto:portal@grove.city">Contact us</a> or join our <a href="https://discord.gg/build-with-grove">Discord community</a>.
</div>
