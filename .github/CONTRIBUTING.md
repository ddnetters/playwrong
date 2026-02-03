# Contributing to Playwrong

First off, thank you for considering contributing to Playwrong! Every contribution helps ensure that more tests can fail spectacularly.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Style Guidelines](#style-guidelines)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](../CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

Playwrong is a satirical testing library that guarantees test failure. Before contributing, please understand the core philosophy:

> "Success is an illusion. Failure is a gift. Playwrong is inevitable."

### Good Contributions

- New creative ways to fail
- Better error messages (more Zen, more wisdom)
- Documentation improvements
- Bug fixes (when things fail in the WRONG way)
- Performance improvements (failing faster is still failing)

### Not-So-Good Contributions

- Making tests pass (that defeats the purpose)
- Removing the core failure mechanism
- Taking things too seriously

## Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/playwrong.git
   cd playwrong
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the tests (they should fail, that's the point):
   ```bash
   npm test
   ```

5. Build the project:
   ```bash
   npm run build
   ```

6. Lint your code:
   ```bash
   npm run lint
   ```

## Style Guidelines

### Code Style

- We use TypeScript
- We use ESLint with Prettier for formatting
- Run `npm run lint-fix` to auto-fix most issues

### Commit Messages

Use clear, descriptive commit messages:

- `feat: add new way to fail gracefully`
- `fix: ensure tests fail consistently`
- `docs: explain philosophy of failure`
- `chore: update dependencies`

### The Zen of Playwrong

When in doubt, remember:

1. Tests should always fail
2. Failure messages should be enlightening
3. The code should be simple (failure doesn't need complexity)
4. Humor is welcome, cruelty is not

## Pull Request Process

1. Create a feature branch from `main`:
   ```bash
   git checkout -b feature/my-new-failure-mode
   ```

2. Make your changes

3. Ensure tests fail correctly:
   ```bash
   npm test
   ```

4. Ensure linting passes:
   ```bash
   npm run lint
   ```

5. Push to your fork and create a Pull Request

6. Fill out the PR template completely

7. Wait for review (we'll try to fail quickly)

### Review Criteria

PRs will be reviewed for:

- Does it maintain the spirit of guaranteed failure?
- Is the code clean and well-documented?
- Does it include appropriate tests (that fail)?
- Is it funny? (optional but appreciated)

## Questions?

Feel free to open an issue or start a discussion. We're here to help you fail better.

---

*Remember: In Playwrong, every contribution is a success because it helps others fail.* 🧘‍♂️
