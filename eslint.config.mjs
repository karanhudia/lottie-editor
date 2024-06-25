import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    prettierConfig,
    {
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        files: ['eslint.config.mjs'],
        ...tseslint.configs.disableTypeChecked,
    },
    {
        rules: {
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
            '@typescript-eslint/no-misused-promises': 'off'
        }
    }
);
