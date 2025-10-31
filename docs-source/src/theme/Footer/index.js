import React from "react"
import { useColorMode } from "@docusaurus/theme-common"
import { Anchor, Container, Grid, Group, Image, Text } from "@mantine/core"
import styles from "./Footer.module.css"

export default function Footer() {
  const { colorMode } = useColorMode()
  return (
    <footer className={styles.footer}>
      <Container size="xl">
        <Grid justify="space-between">
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Anchor href="/">
              <Image
                src={
                  colorMode === "light"
                    ? "/img/grove-logo-icon-light.svg"
                    : "/img/grove-logo-icon-dark.svg"
                }
                alt="Grove logo"
                fit="contain"
                w="auto"
                className={styles.logo}
              />
            </Anchor>
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6, sm: 4 }}>
            <Group className={styles.linksGroup}>
              <Anchor href="https://grove.city/privacy" target="_blank">
                Privacy
              </Anchor>
              <Anchor href="https://grove.city/terms" target="_blank">
                Terms
              </Anchor>
              <Anchor href="https://grove.city/sla" target="_blank">
                SLA
              </Anchor>
            </Group>
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6, sm: 4 }}>
            <Group className={styles.socialGroup}>
              <Anchor href="https://twitter.com/BuildWithGrove" target="_blank">
                <Image src="/social/x.png" loading="lazy" alt="X (Twitter) logo" />
              </Anchor>
              <Anchor href="https://discord.gg/build-with-grove" target="_blank">
                <Image src="/social/discord.png" loading="lazy" alt="Discord logo" />
              </Anchor>
              <Anchor
                href="https://github.com/buildwithgrove/docs"
                target="_blank"
              >
                <Image src="/social/github.png" loading="lazy" alt="GitHub logo" />
              </Anchor>
              <Anchor
                href="https://www.linkedin.com/company/build-with-grove"
                target="_blank"
              >
                <Image src="/social/linkedin.png" loading="lazy" alt="LinkedIn logo" />
              </Anchor>
            </Group>
          </Grid.Col>
        </Grid>
        <Group my="xl" justify="center">
          <Text ta="center">© {new Date().getFullYear()} Grove</Text>
        </Group>
      </Container>
    </footer>
  )
}
