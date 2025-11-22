# Contributing to Seven Wonders Duel – Game Engine

Thank you for considering contributing to this open-source project!  
We aim to build a clean, scalable, and fully testable implementation of the Seven Wonders: Duel game engine.  
Your help is welcome — whether it’s code, documentation, ideas, or feedback.

---

## 🧭 Philosophy & Guiding Principles

We follow:

- Clean Code principles  
- Strong domain-driven structure  
- Maintainability and readability over clever tricks  
- Small, incremental contributions inspired by Agile practices  
- Full determinism and testability of the game engine  
- Strict separation between:
  - **Domain logic**
  - **Application use cases**
  - **Infrastructure code**

Contributors should try to keep the codebase consistent with this philosophy.

---

## 🛠️ Requirements

Make sure you have:

- **Node.js v22.17.1 LTS**
- **npm** (bundled with Node)
- The project dependencies installed using:

**npm install**

---

## 🧱 Project Structure

Key directories:

src/  
  app/  
    commands/     → Application layer: entrypoints, orchestrators  
    usecases/     → Core business interactions  
  domain/  
    core/         → Fundamental domain concepts  
    engine/       → Game engine logic, rules, entities  

Path aliases (configured in tsconfig):

- `@commands/*`  
- `@usecases/*`  
- `@core/*`  
- `@engine/*`

---

## 🌱 How to Contribute

### 1. Fork the repository

Create your own fork on GitHub and clone it locally.

### 2. Create a feature branch

Example:

**git checkout -b feature/age-setup**

Branch naming conventions:

- `feature/*` (new features)  
- `fix/*` (bug fixes)  
- `refactor/*` (improvements)  
- `docs/*` (documentation updates)  

### 3. Install dependencies

**npm install**

### 4. Run the linter

**npm run lint**

Auto-format code:

**npm run format**

### 5. Add or update tests

All new logic **must** include tests.

Run tests:

**npm test**

Run with coverage:

**npm run test:cov**

### 6. Commit cleanly

Use clear, focused commits.

Example:

feat(engine): implement military conflict progression rules

### 7. Push and submit a Pull Request

Your PR should include:

- A description of the feature/fix  
- Updated tests  
- Passing lint and test checks  

---

## 📐 Code Style

This project uses:

- ESLint  
- Prettier  
- TypeScript strict mode  
- Tsyringe decorators  

Guidelines:

- Prefer explicit types  
- Keep functions small  
- Avoid duplication  
- Use meaningful names  
- Avoid side effects inside domain logic  

---

## 🧪 Testing Guidelines

- Tests must be deterministic  
- Follow Arrange / Act / Assert  
- Cover edge cases  
- No external side effects  
- Domain logic should be isolated and highly testable  

---

## 💬 Need Help?

Feel free to open:

- A Discussion  
- An Issue  
- A question in your PR  

We’re glad to help contributors!

---

## 🤝 Thank You

Every contribution — big or small — helps the project grow.  
Thank you for your time and your work!
