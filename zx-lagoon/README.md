# Lagoon zx scripts

These zx commands are wrappers around lagoon commands and are meant to be quick
ways of doing repeated commands.

Example:

<img width="385" height="73" alt="image" src="https://github.com/user-attachments/assets/6bb577d3-1f05-4d7a-838b-0fdd97c7db0d" />


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
