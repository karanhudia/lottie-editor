import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://lottie-editor.onrender.com/graphql',
  documents: 'src/graphql/**/*.graphql',
  generates: {
    'src/graphql/generated/graphql.ts': {
      plugins: [
        {
          add: {
            content: '// @ts-nocheck',
          },
        },
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
        'named-operations-object',
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: true,
        withComponent: false,
      },
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
};

export default config;
