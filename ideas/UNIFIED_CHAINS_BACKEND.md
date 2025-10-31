# Unified Chain Data Backend - TODO

## Current State

The codebase currently maintains **three separate chain/service lists** that need to be manually synchronized:

1. **Status Page** (`status.html:331-397`)
   - Type: Hardcoded JavaScript array
   - Count: 66 chains
   - Format: `{ id, name, type, chainPage }`
   - Purpose: Powers the status dashboard with real-time blockchain status

2. **Public Endpoints Page** (`public-endpoints.html`)
   - Type: Hardcoded HTML cards
   - Count: 69 endpoint cards
   - Purpose: Displays available public RPC endpoints

3. **Documentation Site** (`docs-source/plugins/chain-endpoints.js`)
   - Type: Dynamic API fetch from Portal
   - Source: GraphQL API at `pub.portal.grove.city/query`
   - Purpose: Auto-generates service API documentation pages
   - **This is the single source of truth!**

## Problem

- Manual maintenance across 3 locations
- Risk of drift/inconsistency when chains are added/removed
- Requires updates to multiple files for each chain change
- Status page and public endpoints can become out of sync

## Solution Options

### Option A: Shared Build-Time Data Module (Simple)

Export the API fetch logic from the docs plugin into a reusable module that can be used at build time for both the docs and main site.

**Implementation:**
- Create `/src/data/fetchChains.js` that exports the Portal API fetch function
- Both docs plugin and build scripts import and use this module
- Generates static data files at build time

**Pros:**
- Simple to implement
- Single source of truth (Portal API)
- No runtime API calls needed

**Cons:**
- Still requires build step coordination
- Data only updates when you rebuild

### Option B: Generated JSON Data File (Recommended)

Create a build script that fetches chain data from the Portal API and generates a `chains.json` file that all parts of the site consume.

**Implementation:**
```bash
npm run generate-chains  # Fetches from Portal API → src/data/chains.json
```

**Usage:**
- Status page: `import chains from '/src/data/chains.json'`
- Public endpoints: Same import
- Docs: Plugin reads from same file instead of fetching

**Pros:**
- True single source of truth
- Can be run manually or in CI/CD
- Easy to version control and review changes
- Fast builds (no API calls during build)
- Can add a pre-build hook to auto-generate

**Cons:**
- Adds extra build step
- Need to remember to regenerate when chains change

### Option C: Runtime API Integration

Both the status page and public endpoints fetch chain data from the Portal API at runtime.

**Pros:**
- Always up-to-date
- No build step needed

**Cons:**
- Slower page loads
- Requires client-side API calls
- Potential rate limiting issues
- More complex error handling

## Recommended Approach: Option B

Implement a build script that:
1. Fetches chain data from `pub.portal.grove.city/query` GraphQL API
2. Transforms data into a standardized format
3. Writes to `/src/data/chains.json`
4. All pages (status, public-endpoints, docs) consume this file

## Implementation Tasks

- [ ] Create `/src/data/fetchChains.js` - API fetch utility
- [ ] Create `/scripts/generate-chains.js` - Build script
- [ ] Add `generate-chains` npm script to package.json
- [ ] Update status.html to import and use chains.json
- [ ] Update public-endpoints.html to dynamically generate cards from chains.json
- [ ] Update docs plugin to read from chains.json instead of fetching
- [ ] Add pre-build hook to automatically regenerate chains.json
- [ ] Update .gitignore if needed (or commit chains.json for visibility)
- [ ] Document the process in README

## Data Schema

The unified chain data should include all fields needed by all consumers:

```json
{
  "chains": [
    {
      "id": "eth",
      "name": "Ethereum",
      "ticker": "ETH",
      "type": "eth",
      "chainPage": "ethereum",
      "description": "...",
      "active": true,
      "icon": "/images/services/ethereum.png",
      "rpcUrl": "https://...",
      "chainId": "0x1"
    }
  ]
}
```

## Benefits of Unification

- ✅ Single source of truth (Portal API)
- ✅ No manual updates across multiple files
- ✅ Automatic sync when chains are added/removed in Portal
- ✅ Less prone to drift and errors
- ✅ Easier to maintain long-term
- ✅ Can add validation and testing

---

**Status:** Not yet implemented - marked for future enhancement
**Priority:** Medium - current manual approach works but is maintenance-heavy
**Estimated Effort:** 2-3 hours
