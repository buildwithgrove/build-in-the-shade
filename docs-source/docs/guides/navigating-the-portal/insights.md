---
sidebar_position: 4
sidebar_label: Insights
---

# Insights
**Insights are Grove’s observability layer** — giving you the clarity to monitor performance, usage, and reliability across every level of your infrastructure. Whether you’re running a single dApp or an entire suite of services, Insights let you see the big picture and drill into the details, all within the Portal.

## 🔭 The Hierarchy of Insights
Grove organizes Insights along the same structure as the Portal:
- **Account Insights** — the organizational view, aggregating activity across every Application.
- **Application Insights** — a focused view of how a single Application is performing.
- **Logs** — the most granular layer, where data flows in from each individual RPC endpoint.

This hierarchy makes it seamless to move from **macro → micro**: start with your account’s overall health, zoom into a specific application, and troubleshoot down to a single endpoint.

## 📊 Account Insights
**The big picture**. Account Insights aggregate all activity across your organization.
- Total relay volume across all Applications on your Account
- Performance trends by network, chain, or endpoint
- Compare Applications
- Monitor usage against plan limits
**Use it for**: operations, planning, budgeting, and understanding how your team’s projects add up at scale.

## ⚡ Application Insights
**The zoom-in view**. Application Insights show how a single app is performing in the network.
- Request volume, latency, and reliability for that app
- Trends over time to optimize performance
**Use it for**: debugging, performance tuning, and ensuring reliability for mission-critical apps.

## 📝 Logs
For granular debugging, **Logs** extend Insights into a request-by-request audit trail:
- **Relay Records** — view each request sent through Grove.
- **Errors & Failures** — trace failed calls and diagnose causes.
- **Audit Trail** — maintain full transparency for compliance and QA.
**Use it for**: precise troubleshooting or when you need to analyze a specific service connection.

:::tip Logs: Your Debugging Lens
Within Application Insights, the Logs tab gives you a request-by-request view of activity.
- Track every relay sent through Grove
- Pinpoint errors, failures, or slow responses
- Maintain a complete audit trail for compliance and QA
**Think of Logs as the microscope inside Insights** — where you move from patterns to precision.
:::

## ✅ Best Practices
- **Start wide** → check Account Insights for overall usage and anomalies.
- **Drill down** → move into Application Insights when issues appear.
- **Drop into Logs** → use request-level data for root-cause debugging.
- **Monitor continuously** → set alerts for relay thresholds and latency changes.

### Why It Matters
With Grove Insights, you don’t just see raw data — you see **how your infrastructure is performing at every level**. From the health of your organization down to a single RPC call, Insights (and Logs) give you the confidence to build, scale, and operate with precision.
