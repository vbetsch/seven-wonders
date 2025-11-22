# Seven Wonders Duel Edition

## 🎮 Overview

This project aims to recreate the **Seven Wonders: Duel** board game as a fully playable digital experience.  
The long-term goal is to provide a complete game engine, a bot you can challenge, and eventually an online multiplayer
mode — all built in **TypeScript/Node.js**.

This repository currently focuses on the **core logic of the game**.

## 🧩 About the Board Game

**Seven Wonders: Duel** is a 2-player competitive strategy game where players develop their civilization across three
Ages.  
Each Age uses a specific pyramid-like structure of cards, with some cards visible and others hidden until revealed.

During their turn, players:

1. Pick a visible card from the structure.
2. Choose one of the following actions:
  - Construct the building by paying its resource cost
  - Discard the card to gain coins
  - Use the card to build one of their Wonders

Victory can be achieved in **three different ways**:

- **Scientific Victory** – collect 6 different scientific symbols
- **Military Victory** – push the conflict pawn to the opponent’s capital
- **Civil Victory** – have the highest victory points at the end of the third Age

The game combines drafting, resource management, chaining effects, Wonders, military pressure, and scientific
progression — creating deep and varied strategic possibilities.

## 🧠 Project Purpose

The goal of this repository is to implement the **entire game engine** of Seven Wonders: Duel, including:

- Game entities (cards, Wonders, resources, players…)
- Age setup and card pyramid generation
- Turn management and game state transitions
- Military and scientific progression
- Victory condition checks
- Rules validation and enforcement
- Deterministic, testable logic

In the future, the project will also include:

### 🤖 AI Bot

A computer-controlled opponent capable of evaluating decisions and simulating strategies.

### 🌐 Multiplayer Support

A web-based interface allowing matches against other human players.

---

## 🛠️ Tech Stack

- **Node.js v22.17.1 LTS**
- **TypeScript** (decorators enabled)
- **Tsyringe** (dependency injection)
- **Jest** (unit tests)
- **ESLint + Prettier** (quality and formatting)
- **ts-node** (development runtime)
- **tsc-alias** (path alias resolution)

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the project (development)

### Run the CLI interface

```bash
npm start
```

## 🧪 Running Tests

### Run tests with coverage

```bash
npm run test:cov
```

## 🧹 Linting & Formatting

### Run linter and formatter checks

```bash
npm run lint
```

## 🏗️ Building the Project

```bash
npm run build
```

## 🧼 Code Philosophy

This project is built with:

- Clean Code principles
- High-level maintainability
- Strong domain separation
- Clear and modular architecture
- Agile-inspired processes

**We aim to deliver the cleanest and most robust implementation possible.**

## 🤝 Contributing

We welcome anyone who wants to contribute — whether adding rules, improving architecture, writing tests, or enhancing
documentation.

Feel free to open issues or submit pull requests!

[© 2025 vbetsch — MIT License](LICENSE)  
