import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import graphqlLint from '@graphql-eslint/eslint-plugin';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    ...tseslint.configs.recommendedTypeChecked,
    ...graphqlLint,
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        files: ['eslint.config.mjs', 'graphql.ts'],
        ...tseslint.configs.disableTypeChecked,
    },
    {
        rules: {
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        }
    }
);
