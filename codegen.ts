import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    'src/graphql/lottie-server/generated.ts': {
      schema: 'https://lottie-editor.onrender.com/graphql',
      documents: 'src/graphql/lottie-server/**/*.graphql',
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
    'src/graphql/lottiefiles/generated.ts': {
      schema: 'https://graphql.lottiefiles.com',
      documents: 'src/graphql/lottiefiles/**/*.graphql',
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
