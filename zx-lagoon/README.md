# Lagoon zx scripts

These zx commands are wrappers around lagoon commands and are meant to be quick
ways of doing repeated commands.

## Prerequisites

- [Lagoon CLI](https://uselagoon.github.io/lagoon-cli/)
- [zx](https://google.github.io/zx/)

## Command aliases

It is recommended to create shell aliases in order to have even leaner commands:

```bash
# zx cmds
alias lagoon-view="zx ~/tools/zx-lagoon/view-lagoon-pr-environment.mjs"
alias lagoon-sql-dump="zx ~/tools/zx-lagoon/sql-dump.mjs"
alias lagoon-uli="zx ~/tools/zx-lagoon/one-time-login.mjs"
```
