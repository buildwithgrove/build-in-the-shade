---
title: "Solana API Integration | Grove Web3 Infrastructure"
description: "Complete Solana RPC API documentation for developers. Ultra-fast Solana blockchain access with enhanced SPL token support and 7-epoch historical data. Get started in minutes."
keywords: [solana, sol, rpc, api, blockchain, web3, spl, tokens, nft, defi, phantom, grove, infrastructure, developers, integration]
sidebar_position: 1
sidebar_label: solana
slug: /service-apis/solana-api
canonical_url: https://grove.city/docs/service-apis/solana-api
---

# Solana API Integration

<div style={{background: "linear-gradient(135deg, #9945ff 0%, #14f195 100%)", color: "white", padding: "1.5rem", borderRadius: "8px", margin: "1rem 0"}}>
  <h2 style={{color: "white", marginTop: 0}}>🚀 Quick Start</h2>
  <p style={{marginBottom: 0, fontSize: "1.1rem"}}>Connect to Solana's high-performance blockchain with Grove's custom configuration featuring enhanced indexing and 7-epoch historical data.</p>
</div>

## Overview

Solana is a high-performance blockchain supporting builders creating crypto apps that scale to billions of users. Grove provides enterprise-grade Solana RPC access with **custom enhanced configurations** including SPL token indexing, extended historical data, and specialized program support.

### Why Choose Grove for Solana?

- ⚡ **Ultra-fast response times** - Sub-50ms latency globally
- 🔍 **Enhanced indexing** - Full SPL token and account indexing
- 📊 **Extended history** - 7 epochs of historical data retention
- 🛠️ **Custom configuration** - Optimized for developer needs
- 🌍 **Global edge network** - 99.9% uptime guarantee

## Network Information

| Property | Value |
|----------|-------|
| **Network Name** | Solana |
| **Native Token** | SOL |
| **Pocket Service ID** | `solana` |
| **Block Explorer** | [Solscan](https://solscan.io) |
| **Official Documentation** | [Solana Developer Docs](https://docs.solana.com/) |

## Enhanced Capabilities 🌟

Grove's **Solana Custom Configuration** provides enhanced features beyond standard RPC access:

### 📈 Extended Historical Data
- **7 epochs** of historical data retention (vs standard 2-3 epochs)
- Full transaction and account history
- Complete program interaction logs

### 🎯 Advanced Indexing
- **SPL Token indexing** - Fast token balance and transfer queries  
- **Program-specific indexing** - Optimized access to popular programs
- **Account indexing** - Efficient account lookup by program ID

### 🔧 Specialized Programs Support
- [**Token Program**](https://spl.solana.com/token) with full indexing
- [**Associated Token Account Program**](https://spl.solana.com/associated-token-account)
- [**Kin Program**](https://solana.com/ecosystem/kin) for ecosystem apps
- Custom program indexing available on request

## Supported APIs

| API | Documentation |
| --- | ------------- |
| **Solana API** | [view spec](https://docs.solana.com/api/http) |

## Integration Examples

### Quick Setup

```javascript
// Using @solana/web3.js
import { Connection, PublicKey } from '@solana/web3.js';

const connection = new Connection('YOUR_GROVE_SOLANA_ENDPOINT', 'confirmed');

// Get account balance
const publicKey = new PublicKey('11111111111111111111111111111112');
const balance = await connection.getBalance(publicKey);
console.log('Balance:', balance / 1e9, 'SOL');

// Get latest slot
const slot = await connection.getSlot();
console.log('Latest slot:', slot);
```

### SPL Token Queries

```javascript
// Get token accounts for an owner
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';

const ownerPublicKey = new PublicKey('OWNER_ADDRESS_HERE');
const tokenAccounts = await connection.getTokenAccountsByOwner(
  ownerPublicKey,
  { programId: TOKEN_PROGRAM_ID }
);

console.log('Token accounts:', tokenAccounts.value.length);

// Get specific token balance
const mintAddress = new PublicKey('TOKEN_MINT_ADDRESS');
const tokenAccountsByMint = await connection.getTokenAccountsByOwner(
  ownerPublicKey,
  { mint: mintAddress }
);
```

### Transaction Monitoring

```javascript
// Send and confirm transaction
const transaction = new Transaction().add(
  SystemProgram.transfer({
    fromPubkey: senderPublicKey,
    toPubkey: recipientPublicKey,
    lamports: 1000000, // 0.001 SOL
  })
);

const signature = await connection.sendTransaction(transaction, [senderKeypair]);
const confirmation = await connection.confirmTransaction(signature, 'confirmed');
console.log('Transaction confirmed:', confirmation);
```

## Performance & Reliability

Grove's enhanced Solana infrastructure delivers:

- **Response Time**: < 50ms average globally
- **Uptime**: 99.9% SLA guarantee
- **Rate Limits**: Unlimited requests/second on all plans
- **Historical Data**: 7 epochs of complete transaction history
- **Global Coverage**: Backed by the Unstoppable Pocket Network

### Supplier Configuration

Our **Solana Custom Configuration** uses a unique configuration. In addition to custom pruning logic to retain at least the previous 7 epochs, our recommended configuration flags are:

```
--account-index program-id spl-token-owner spl-token-mint
```

## Developer Resources

### 📚 Essential Links
- [Grove API Documentation](../grove-api/overview/grove-api)
- [Solana Developer Docs](https://docs.solana.com/)
- [SPL Token Documentation](https://spl.solana.com/)
- [Network Status](https://status.grove.city)

### 🛠️ Tools & SDKs
- [@solana/web3.js](https://www.npmjs.com/package/@solana/web3.js)
- [Anchor Framework](https://www.anchor-lang.com/)
- [Solana CLI](https://docs.solana.com/cli)

### 💬 Community & Support
- [Solana Discord](https://discord.com/invite/pquxPsq)
- [Technical Support](https://discord.com/channels/824324475256438814/1150805396085293106)

## Getting Started

1. **Sign up** for a Grove account at [portal.grove.city](https://portal.grove.city)
2. **Create** a new application and select Solana Mainnet
3. **Configure** your endpoints with enhanced indexing features
4. **Start building** with our comprehensive documentation

---

<div style={{background: "#f0f8ff", padding: "1rem", borderLeft: "4px solid #9945ff", margin: "1rem 0"}}>
  <strong>🎯 Pro Tip:</strong> Take advantage of our enhanced SPL token indexing for faster dApp development. Our 7-epoch historical data retention ensures your applications have access to comprehensive blockchain history. <a href="mailto:portal@grove.city">Contact us</a> for custom indexing requirements.
</div>
