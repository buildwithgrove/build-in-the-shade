---
title: "Radix API Integration | Grove Web3 Infrastructure"
description: "Complete Radix RPC API documentation for developers. Fast, reliable Radix blockchain access with Grove's enterprise infrastructure. Get started in minutes."
keywords: [radix, xrd, rpc, api, blockchain, web3, grove, infrastructure, developers, integration]
sidebar_position: 1
sidebar_label: radix
slug: /service-apis/radix-api
canonical_url: https://grove.city/docs/service-apis/radix-api
---

# Radix API Integration

<div style={{background: "linear-gradient(135deg, #052cc0 0%, #00c9a7 100%)", color: "white", padding: "1.5rem", borderRadius: "8px", margin: "1rem 0"}}>
  <h2 style={{color: "white", marginTop: 0}}>🚀 Quick Start</h2>
  <p style={{marginBottom: 0, fontSize: "1.1rem"}}>Connect to Radix in under 5 minutes with Grove's enterprise-grade infrastructure.</p>
</div>

## Overview

Radix is a full-stack, layer-1 smart contract platform offering a radically better experience for users and developers. With Radix, users can confidently use Web3 and DeFi with the Radix Wallet; and for developers, they can intuitively build secure, production-ready dApps with the asset-oriented Scrypto programming language.

### Why Choose Grove for Radix?

- ⚡ **Ultra-fast response times** - Sub-300ms latency globally
- 📈 **Unlimited RPS and Unlimited relays** - From Prototype to Production seamlessly
- 🌍 **Global edge network** - 99.9% uptime guarantee
- 💡 **Developer-first** - Comprehensive docs and support

## Network Information

| Property | Value |
|----------|-------|
| **Network Name** | Radix |
| **Native Token** | XRD |
| **Pocket Service ID** | `radix` |
| **Block Explorer** | [Radix Explorer](https://dashboard.radixdlt.com) |
| **Official Documentation** | [Radix Docs](https://docs.radixdlt.com/) |

For a deeper understanding of the specific methods for the Radix full-stack, refer to their [official documentation](https://docs.radixdlt.com/docs).

## Supported APIs

| API Spec | Documentation |
| -------- | ------------- |
| **Radix Core API** | [view spec](https://radix-babylon-core-api.redoc.ly/) |

## Integration Examples

### Quick Setup with Radix SDK

```javascript
// Using @radixdlt/radix-engine-toolkit
import { RadixEngineToolkit } from '@radixdlt/radix-engine-toolkit';

// Initialize connection to Radix network
const networkId = 0x01; // Mainnet
const endpoint = 'YOUR_GROVE_RADIX_ENDPOINT';

// Query account information
const accountAddress = 'account_rdx1...';
const accountInfo = await fetch(`${endpoint}/state/entity/details`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    addresses: [accountAddress]
  })
});

console.log('Account info:', await accountInfo.json());
```

## Performance & Reliability

Grove's Radix infrastructure delivers:

- **Response Time**: < 100ms average globally
- **Uptime**: 99.9% SLA guarantee  
- **Rate Limits**: Unlimited requests/second on all plans
- **Global Coverage**: Backed by the Unstoppable Pocket Network

## Developer Resources

### 📚 Essential Links
- [Grove API Documentation](../grove-api/overview/grove-api)
- [Radix Official Docs](https://docs.radixdlt.com/)
- [Network Status](https://status.grove.city)
- [Developer Discord](https://discord.gg/build-with-grove)

### 🛠️ Tools & SDKs
- [@radixdlt/radix-engine-toolkit](https://www.npmjs.com/package/@radixdlt/radix-engine-toolkit)
- [Radix Wallet SDK](https://docs.radixdlt.com/)

### 💬 Community & Support
- [GitHub Issues](https://github.com/buildwithgrove/path)  
- [Technical Support](https://discord.com/channels/824324475256438814/1150805396085293106)

## Getting Started

1. **Sign up** for a Grove account at [portal.grove.city](https://portal.grove.city)
2. **Create** a new application and get your API key
3. **Configure** your endpoints with Radix
4. **Start building** with our comprehensive documentation

---

<div style={{background: "#f8f9fa", padding: "1rem", borderLeft: "4px solid #007bff", margin: "1rem 0"}}>
  <strong>Need help?</strong> Our developer success team is here to help you integrate Radix quickly and efficiently. <a href="mailto:portal@grove.city">Contact us</a> or join our <a href="https://discord.gg/build-with-grove">Discord community</a>.
</div>
