module.exports = {
    extends: ['../../node_modules/@fast-js/eslint/index.js'],
    globals: {
        React: true,
        google: true,
        mount: true,
        mountWithRouter: true,
        shallow: true,
        shallowWithRouter: true,
        context: true,
        expect: true,
        jsdom: true,
        JSX: true,
    },
    overrides: [
        {
            files: ['**/*.stories.*'],
            rules: {
                'import/no-anonymous-default-export': 'off',
            },
            parserOptions: {
                project: './tsconfig.json',
            },
        },
    ],
};
