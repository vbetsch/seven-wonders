# Contributing to Seven Wonders Duel

Thank you for considering contributing to this open-source project!  
We aim to build a clean, scalable, and fully testable implementation of the Seven Wonders: Duel game engine.  
Your help is welcome, whether it’s code, documentation, ideas, or feedback.

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

## 🌱 How to Contribute

1. **Create an issue** if necessary and submit it to us
2. Waiting for our validation
3. **Fork** the repository
4. **Create a branch** for your change with the issue title
   (ex: `65-resource-cost`)
5. Implement your change with clean and clear code
6. Add or update **unit tests**
7. Ensure lint + tests pass
8. Submit a **Pull Request** describing your change

## 📐 Code Style

- Follow TypeScript strictness
- Keep functions small and meaningful
- Maintain separation between domain, use cases, and commands
- No dead code, no commented-out blocks
- Prefer explicit, readable logic
- Clean Code > shortcuts

## 🧪 Testing Guidelines

> **Your entire code must be tested, otherwise it will not be accepted.**

- Tests must be deterministic
- Follow Arrange / Act / Assert
- Cover edge cases
- No external side effects
- Domain logic should be isolated and highly testable

## 💬 Need Help?

Feel free to open an issue or a question in your PR.
We’re glad to help contributors!

## 🤝 Thank You

Every contribution, big or small, helps the project grow.  
Thank you for your time and your work!
