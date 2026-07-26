import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    js.configs.recommended,

    ...tseslint.configs.recommended,

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

    {
        files: ['app/**/*.js'],

        languageOptions: {
            sourceType: 'commonjs',

            globals: {
                ...globals.node,
            },
        },

        plugins: {
            prettier: eslintPluginPrettier,
        },

        rules: {
            '@typescript-eslint/no-require-imports': 'off',

            'prettier/prettier': 'error',
        },
    },

    // Deve ser SEMPRE o último item
    eslintConfigPrettier,
];
