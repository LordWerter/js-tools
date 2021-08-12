module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['react'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'latest',
        },
    },
    rules: {
        'jsx-quotes': [2, 'prefer-single'],

        'react/boolean-prop-naming': 0,
        'react/button-has-type': 0,
        'react/default-props-match-prop-types': 0,
        'react/destructuring-assignment': 0,
        'react/display-name': 0,
        'react/forbid-component-props': [1, { forbid: ['style'] }],
        'react/forbid-dom-props': 0,
        'react/forbid-elements': 0,
        'react/forbid-prop-types': 0,
        'react/forbid-foreign-prop-types': 0,
        'react/no-access-state-in-setstate': 0,
        'react/no-array-index-key': 1,
        'react/no-children-prop': 2,
        'react/no-danger': 2,
        'react/no-danger-with-children': 2,
        'react/no-deprecated': 2,
        'react/no-did-mount-set-state': 0,
        'react/no-did-update-set-state': 0,
        'react/no-direct-mutation-state': 2,
        'react/no-find-dom-node': 1,
        'react/no-is-mounted': 2,
        'react/no-multi-comp': [2, { ignoreStateless: true }],
        'react/no-redundant-should-component-update': 0,
        'react/no-render-return-value': 2,
        'react/no-set-state': 0,
        'react/no-typos': 2,
        'react/no-string-refs': 2,
        'react/no-unescaped-entities': 0,
        'react/no-unknown-property': 2,
        'react/no-unused-prop-types': 2,
        'react/no-unused-state': 2,
        'react/no-will-update-set-state': 2,
        'react/prefer-es6-class': 2,
        'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
        'react/prop-types': 2,
        'react/react-in-jsx-scope': 2,
        'react/require-default-props': 0,
        'react/require-optimization': 0,
        'react/require-render-return': 2,
        'react/self-closing-comp': [2, { html: false }],
        'react/sort-comp': [
            2,
            {
                order: [
                    'variables',
                    'static-variables',
                    'constructor',
                    'static-methods',
                    'lifecycle',
                    'rendering',
                    '/^handle.+$/',
                    'instance-variables',
                    'instance-methods',
                    'everything-else',
                ],
                groups: {
                    variables: ['/animation|ID|timeout|interval|node|delay/gi', '/^el.+$/'],
                    lifecycle: [
                        'contextTypes',
                        'childContextTypes',
                        'defaultProps',
                        'propTypes',
                        'state',
                        'constructor',
                        'getChildContext',
                        'getDerivedStateFromProps',
                        'componentWillMount',
                        'UNSAFE_componentWillMount',
                        'componentDidMount',
                        'componentWillReceiveProps',
                        'UNSAFE_componentWillReceiveProps',
                        'shouldComponentUpdate',
                        'componentWillUpdate',
                        'UNSAFE_componentWillUpdate',
                        'getSnapshotBeforeUpdate',
                        'componentDidUpdate',
                        'componentDidCatch',
                        'componentWillUnmount',
                    ],
                    rendering: ['render', '/^render.+$/'],
                },
            },
        ],
        'react/sort-prop-types': 0,
        'react/style-prop-object': 1,
        'react/void-dom-elements-no-children': 2,

        'react/jsx-boolean-value': [1, 'never'],
        'react/jsx-closing-bracket-location': [1, { selfClosing: 'line-aligned', nonEmpty: 'after-props' }],
        'react/jsx-closing-tag-location': 2,
        'react/jsx-curly-spacing': 2,
        'react/jsx-equals-spacing': 2,
        'react/jsx-filename-extension': 0,
        'react/jsx-first-prop-new-line': [2, 'multiline'],
        'react/jsx-handler-names': 2,
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': [2, 4],
        'react/jsx-key': 2,
        'react/jsx-max-props-per-line': [1, { when: 'multiline' }],
        'react/jsx-no-bind': [1, { ignoreRefs: true }],
        'react/jsx-no-comment-textnodes': 2,
        'react/jsx-no-duplicate-props': [2, { ignoreCase: true }],
        'react/jsx-no-literals': 0,
        'react/jsx-no-target-blank': 2,
        'react/jsx-no-undef': 2,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-curly-brace-presence': [0, { props: 'always', children: 'never' }],
        'react/jsx-pascal-case': 2,
        'react/jsx-sort-props': [
            1,
            {
                callbacksLast: true,
                noSortAlphabetically: true,
                reservedFirst: ['key'],
            },
        ],
        'react/jsx-tag-spacing': [
            2,
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never',
            },
        ],
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/jsx-wrap-multilines': 2,
    },
};
