# FHECounter — FHEVM Example Contract

This repository demonstrates a minimal encrypted counter built using Zama’s FHEVM Solidity libraries.

The goal of this project is to show correct integration of Fully Homomorphic Encryption (FHE) types and operations in a smart contract context.

---

## Overview

The `FHECounter` contract stores a counter as an encrypted integer (`euint32`).

All arithmetic operations are performed on encrypted values, meaning the counter value is never revealed on-chain.

---

## Contract Details

- The counter is stored as an encrypted `euint32`
- The constructor initializes the counter using `FHE.asEuint32(0)`
- Users can increment the counter by providing an encrypted value
- The encrypted counter can be read, but not decrypted, from the contract

---

## Why Local Tests Are Skipped

This contract relies on the FHEVM coprocessor.

Standard EVM environments (such as Hardhat local network) do not support:

- FHE coprocessor execution
- Encrypted arithmetic
- Key Management Service (KMS) verification

As a result:
- Local deployment and execution revert by design
- This is expected behavior for FHEVM contracts

For this reason, no local unit tests are included.

---

## Compilation

The contract compiles successfully using:

- Solidity `^0.8.24`
- `@fhevm/solidity` official library

Compilation is done with Hardhat.

---

## Deployment

This contract is intended to be deployed only on an FHEVM-compatible testnet.

Local deployment is intentionally skipped because encrypted operations require the FHEVM runtime environment.

---

## Files

- `contracts/FHECounter.sol` — Encrypted counter contract
- `hardhat.config.js` — Solidity compiler configuration
- `scripts/deploy.js` — Deployment script (for FHEVM networks)
- `README.md` — Project documentation

---

## Notes

This repository focuses on correct FHEVM contract structure and integration rather than local execution.

