import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    {
        ignores: [
            'node_modules/**',
            'playwright-report/**',
            'test-results/**',
            'allure-results/**',
            'allure-report/**',
            'coverage/**',
            'dist/**',
        ],
    },

    js.configs.recommended,

    ...tseslint.configs.recommended,

    // ============================================
    // TypeScript
    // ============================================

    {
        files: ['**/*.ts'],

        languageOptions: {
            globals: {
                ...globals.node,
            },

            parserOptions: {
                project: './tsconfig.json',
            },
        },

        plugins: {
            prettier: eslintPluginPrettier,
        },

        rules: {
            '@typescript-eslint/no-unused-vars': 'error',

            'no-console': 'off',

            'no-empty-pattern': 'off',

            'prettier/prettier': 'error',
        },
    },

    // ============================================
    // JavaScript (ES Modules)
    // Helpers, Scripts, Config, Mock, etc.
    // ============================================

    {
        files: ['**/*.js', '**/*.mjs'],

        languageOptions: {
            sourceType: 'module',

            globals: {
                ...globals.node,
            },
        },

        plugins: {
            prettier: eslintPluginPrettier,
        },

        rules: {
            'no-console': 'off',

            'prettier/prettier': 'error',

            '@typescript-eslint/no-require-imports': 'off',
        },
    },

    // Deve ser SEMPRE o último item
    eslintConfigPrettier,
];
