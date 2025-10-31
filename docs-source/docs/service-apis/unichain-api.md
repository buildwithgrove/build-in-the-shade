---
title: "Unichain API Integration | Grove Web3 Infrastructure"
description: "Complete Unichain RPC API documentation for developers. Fast, reliable Unichain blockchain access with Grove's enterprise infrastructure. Get started in minutes."
keywords: [unichain, eth, rpc, api, blockchain, web3, defi, uniswap, evm, grove, infrastructure, developers, integration]
sidebar_position: 1
sidebar_label: unichain
slug: /service-apis/unichain-api
canonical_url: https://grove.city/docs/service-apis/unichain-api
---

# Unichain API Integration

<div style={{background: "linear-gradient(135deg, #ff007a 0%, #ff5c00 100%)", color: "white", padding: "1.5rem", borderRadius: "8px", margin: "1rem 0"}}>
  <h2 style={{color: "white", marginTop: 0}}>🚀 Quick Start</h2>
  <p style={{marginBottom: 0, fontSize: "1.1rem"}}>Connect to Unichain in under 5 minutes with Grove's enterprise-grade infrastructure.</p>
</div>

## Overview

Unichain is Uniswap's high-performance L2 blockchain designed for decentralized finance and trading. Built as an EVM-compatible chain, Unichain provides fast, cost-effective transactions for DeFi applications. Grove delivers enterprise-grade Unichain RPC access with guaranteed uptime, global edge network, and developer-first tooling.

### Why Choose Grove for Unichain?

- ⚡ **Ultra-fast response times** - Sub-300ms latency globally
- 📈 **Unlimited RPS and Unlimited relays** - From Prototype to Production seamlessly
- 🌍 **Global edge network** - 99.9% uptime guarantee
- 💡 **Developer-first** - Comprehensive docs and support

## Network Information

| Property | Value |
|----------|-------|
| **Network Name** | Unichain |
| **Native Token** | ETH |
| **EVM Chain ID** | `1301` |
| **Pocket Service ID** | `unichain` |
| **Block Explorer** | [Unichain Explorer](https://unichain.org/explorer) |
| **Official Documentation** | [Unichain Docs](https://docs.unichain.org/) |

## Supported APIs

| API | Documentation |
| --- | ------------- |
| **JSON-RPC** | [view spec](../grove-api/api-definition/definition#json-rpc-supported-methods) |

## Integration Examples

### Quick Setup

```javascript
// Using ethers.js (for EVM-compatible chains)
import { JsonRpcProvider } from 'ethers';

const provider = new JsonRpcProvider('YOUR_GROVE_UNICHAIN_ENDPOINT');

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

### DeFi Integration

```javascript
// Example: Interacting with Uniswap V4 on Unichain
import { Contract } from 'ethers';

// Uniswap V4 Pool Manager (example address)
const poolManagerAddress = '0x...';
const poolManagerABI = [...];

const poolManager = new Contract(poolManagerAddress, poolManagerABI, provider);

// Get pool information
const poolKey = {
  currency0: '0x...', // Token A address
  currency1: '0x...', // Token B address
  fee: 3000, // 0.3% fee tier
  tickSpacing: 60,
  hooks: '0x0000000000000000000000000000000000000000'
};

const poolInfo = await poolManager.getPool(poolKey);
console.log('Pool info:', poolInfo);
```

## Performance & Reliability

Grove's Unichain infrastructure delivers:

- **Response Time**: < 100ms average globally
- **Uptime**: 99.9% SLA guarantee
- **Rate Limits**: Unlimited requests/second on all plans
- **Global Coverage**: Backed by the Unstoppable Pocket Network

## Developer Resources

### 📚 Essential Links
- [Grove API Documentation](../grove-api/overview/grove-api)
- [Unichain Official Docs](https://docs.unichain.org/)
- [Uniswap Documentation](https://docs.uniswap.org/)
- [Network Status](https://status.grove.city)
- [Developer Discord](https://discord.gg/build-with-grove)

### 🛠️ Tools & SDKs
- [Ethers.js](https://docs.ethers.io/)
- [Web3.js](https://web3js.readthedocs.io/)
- [Hardhat](https://hardhat.org/)
- [Foundry](https://getfoundry.sh/)
- [Uniswap SDK](https://docs.uniswap.org/sdk/v4/overview)

### 💬 Community & Support
- [GitHub Issues](https://github.com/buildwithgrove/path)
- [Technical Support](https://discord.com/channels/824324475256438814/1150805396085293106)

## Getting Started

1. **Sign up** for a Grove account at [portal.grove.city](https://portal.grove.city)
2. **Create** a new application and get your API key
3. **Configure** your endpoints with Unichain
4. **Start building** with our comprehensive documentation

---

<div style={{background: "#f8f9fa", padding: "1rem", borderLeft: "4px solid #007bff", margin: "1rem 0"}}>
  <strong>Need help?</strong> Our developer success team is here to help you integrate Unichain quickly and efficiently. <a href="mailto:portal@grove.city">Contact us</a> or join our <a href="https://discord.gg/build-with-grove">Discord community</a>.
</div>
