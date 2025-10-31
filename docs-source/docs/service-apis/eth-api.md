---
title: "Ethereum API Integration | Grove Web3 Infrastructure"
description: "Complete Ethereum RPC API documentation for developers. Fast, reliable Ethereum blockchain access with Grove's enterprise infrastructure. Get started in minutes."
keywords: [ethereum, eth, rpc, api, blockchain, web3, smart contracts, defi, nft, evm, grove, infrastructure, developers, integration]
sidebar_position: 1
sidebar_label: eth
slug: /service-apis/eth-api
canonical_url: https://grove.city/docs/service-apis/eth-api
---

# Ethereum API Integration

<div style={{background: "linear-gradient(135deg, #627eea 0%, #764ba2 100%)", color: "white", padding: "1.5rem", borderRadius: "8px", margin: "1rem 0"}}>
  <h2 style={{color: "white", marginTop: 0}}>🚀 Quick Start</h2>
  <p style={{marginBottom: 0, fontSize: "1.1rem"}}>Connect to Ethereum Mainnet in under 5 minutes with Grove's enterprise-grade infrastructure.</p>
</div>

## Overview

Ethereum is the world's leading smart contract platform, enabling decentralized applications (dApps), DeFi protocols, NFTs, and more. Grove provides enterprise-grade Ethereum RPC access with guaranteed uptime, global edge network, and developer-first tooling.

### Why Choose Grove for Ethereum?

- ⚡ **Ultra-fast response times** - Sub-300ms latency globally
- 📈 **Unlimited RPS and Unlimited relays** - From Prototype to Production seamlessly
- 🌍 **Global edge network** - 99.9% uptime guarantee
- 💡 **Developer-first** - Comprehensive docs and support

## Network Information

| Property | Value |
|----------|-------|
| **Network Name** | Ethereum Mainnet |
| **Native Token** | ETH |
| **EVM Chain ID** | `1` |
| **Pocket Service ID** | `eth` |
| **Block Explorer** | [Etherscan](https://etherscan.io) |
| **Official Documentation** | [Ethereum Developer Docs](https://ethereum.org/en/developers/docs/) |

## Supported API Methods

### 🔌 JSON-RPC API
Access the complete Ethereum RPC specification with full method support for smart contracts, transactions, and blockchain queries.

| Method Category | Description | Documentation |
|-----------------|-------------|---------------|
| **Standard RPC** | Core blockchain methods (eth_*, net_*, web3_*) | [View Methods](../grove-api/api-definition/definition#json-rpc-supported-methods) |
| **EVM Methods** | Smart contract execution and debugging | [Ethereum JSON-RPC Spec](https://ethereum.org/en/developers/docs/apis/json-rpc/) |

## Integration Examples

### Quick Setup

```javascript
// Using ethers.js
import { JsonRpcProvider } from 'ethers';

const provider = new JsonRpcProvider('YOUR_GROVE_ETHEREUM_ENDPOINT');

// Get latest block
const blockNumber = await provider.getBlockNumber();
console.log('Latest block:', blockNumber);

// Get account balance
const balance = await provider.getBalance('0x742d35Cc6634C0532925a3b8D341EAF9fec0D30D');
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

Grove's Ethereum infrastructure delivers:

- **Response Time**: < 100ms average globally
- **Uptime**: 99.9% SLA guarantee  
- **Rate Limits**: Unlimited requests/second on all plans
- **Global Coverage**: Backed by the Unstoppable Pocket Network
- **Archive Data**: Full historical blockchain data available

## Developer Resources

### 📚 Essential Links
- [Grove API Documentation](../grove-api/overview/grove-api)
- [Ethereum Developer Docs](https://ethereum.org/en/developers/docs/)
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
3. **Configure** your endpoints with Ethereum Mainnet
4. **Start building** with our comprehensive documentation

---

<div style={{background: "#f8f9fa", padding: "1rem", borderLeft: "4px solid #007bff", margin: "1rem 0"}}>
  <strong>Need help?</strong> Our developer success team is here to help you integrate Ethereum quickly and efficiently. <a href="mailto:portal@grove.city">Contact us</a> or join our <a href="https://discord.gg/build-with-grove">Discord community</a>.
</div>
