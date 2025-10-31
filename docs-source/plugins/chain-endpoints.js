export default async function groveChains(context, options) {
  // ...
  return {
    name: "grove-chains",
    async loadContent() {
      try {
        const res = await fetch("https://pub.portal.grove.city/query", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query:
              "query blockchains { blockchains(active: true) { id ticker blockchain blockchainAliases active description enforceResult chainIDCheck logLimitBlocks path scheme } }",
          }),
        })

        if (!res.ok) {
          throw new Error("failed blockchain request")
        }
        const body = await res.json()

        return body.data.blockchains.filter(
            (chain) => chain.id !== "BE2A" && chain.scheme !== "wss"
        )
      } catch (error) {
        console.log(error)
        return []
      }
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions
      await setGlobalData(content)
    },
  }
}
