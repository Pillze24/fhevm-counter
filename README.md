FHECounter — FHEVM Encrypted Counter

This project demonstrates a minimal encrypted smart contract built using Zama’s FHEVM Solidity libraries.

Overview

The FHECounter contract stores a counter as an encrypted integer (euint32).
All arithmetic operations are performed on encrypted values, ensuring that the counter value is never revealed on-chain.

Contract Behavior

The counter is stored as an encrypted euint32

The constructor initializes the counter using Fully Homomorphic Encryption

Users can increment the counter by providing encrypted input

The encrypted value can be retrieved, but cannot be decrypted on-chain

Why Local Deployment and Tests Are Skipped

This contract relies on the FHEVM coprocessor to execute encrypted operations.

Standard EVM environments (such as Hardhat local network or Sepolia) do not support:

FHE coprocessor execution

Encrypted arithmetic

Key Management Service (KMS) verification

As a result:

Local deployment reverts by design

Gas estimation fails due to unsupported encrypted execution

This behavior is expected and correct for FHEVM contracts

Compilation

The contract compiles successfully using:

Solidity ^0.8.24

Official @fhevm/solidity library

Compilation is performed locally to validate correctness, but execution requires an FHEVM-compatible network.

Deployment

This contract is intended to be deployed only on an FHEVM-compatible testnet.

Deployment on standard EVM networks is intentionally skipped because encrypted operations require the FHEVM runtime environment.

Files

contracts/FHECounter.sol — Encrypted counter contract

hardhat.config.js — Solidity compiler configuration

scripts/deploy.js — Deployment script (FHEVM only)

README.md — Project documentation

Notes

This repository focuses on correct FHEVM integration and encrypted contract design rather than local execution.
