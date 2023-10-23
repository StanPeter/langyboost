module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react', 'prettier'],
    rules: {
        // 'react/react-in-jsx-scope': 'off',
        // 'react/jsx-one-expression-per-line': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        // 'react/function-component-definition': [
        //     2,
        //     {
        //         namedComponents: 'arrow-function',
        //         unnamedComponents: 'arrow-function',
        //     },
        // ], // types of components used and the format
        // 'react/jsx-curly-brace-presence': 'off',
        'no-console': 'off', // for development we want logs
        // 'consistent-return': 'off', // can fix later on
        'react/require-default-props': 'off', // we use TS so not required
    },
};
