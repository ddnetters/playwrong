import typescriptParser from '@typescript-eslint/parser';
import eslintPlugin from '@typescript-eslint/eslint-plugin';

export default [
    {
        files: ['src/**/*.{js,mjs,cjs,ts,mts,jsx,tsx}', 'test/**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                sourceType: 'module',
                ecmaVersion: 2020,
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            '@typescript-eslint': eslintPlugin,
        },
        rules: {
            // Enforce consistent indentation (4 spaces)
            'indent': ['error', 4],
            // Enforce the use of single quotes
            'quotes': ['error', 'single'],
            // Enforce semi-colons at the end of statements
            'semi': ['error', 'always'],
            // Enforce consistent linebreak style
            'linebreak-style': ['error', 'unix'],
            // Enforce consistent spacing inside braces
            'object-curly-spacing': ['error', 'always'],
            // Enforce the use of tabs for indentation
            'no-tabs': ['error'],
            // Enforce consistent use of trailing commas
            'comma-dangle': ['error', 'always-multiline'],
            // Enforce consistent spacing before function definition opening parenthesis
            'space-before-function-paren': ['error', 'never'],
            // Enforce consistent spacing inside array brackets
            'array-bracket-spacing': ['error', 'never'],
            // Enforce consistent spacing inside single-line blocks
            'block-spacing': ['error', 'always'],
            // Enforce consistent spacing before and after keywords
            'keyword-spacing': ['error', { 'before': true, 'after': true }],
        },
    },
];