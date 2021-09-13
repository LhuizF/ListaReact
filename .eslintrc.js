module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'airbnb'
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12
    },
    plugins: [
        'react'
    ],
    rules: {
        'no-console': 'off',
        indent: ['error', 4, { ignoredNodes: ['JSXElement'] }],
        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
        'comma-dangle': ['error', 'never'],
        'keyword-spacing': ['error', {
            overrides: {
                if: { after: false }
            }
        }],
        // react
        'react/jsx-filename-extension': 'off',
        'react/state-in-constructor': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': [2, 4],
        'react/forbid-prop-types': 'off'
    }
};
