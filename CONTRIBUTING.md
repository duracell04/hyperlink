# Contributing to Hyperlink

Thank you for considering a contribution! This project uses Node.js and React. The following steps will help you get started.

## Running the Project

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the example environment file and add your Firebase credentials:
   ```bash
   cp .env.example .env
   # edit .env with values from your Firebase project
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Run the full test suite:
   ```bash
   npm test
   ```
5. Lint and format the code:
   ```bash
   npm run lint
   npm run format
   ```
6. Build for production when ready:
   ```bash
   npm run build
   ```

## Style Guidelines

- Code is formatted with **Prettier** (`npm run format`).
- **ESLint** checks for issues (`npm run lint`).
- A pre-commit hook provided by **Husky** automatically runs formatting and linting.

## Submitting Changes

1. Fork the repository and create a feature branch.
2. Ensure `npm test` and `npm run lint` complete without errors.
3. Open a pull request describing the changes and any relevant context.

We appreciate your help in improving Hyperlink!
