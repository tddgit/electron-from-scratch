const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-private-methods',
    '@babel/plugin-proposal-private-property-in-object',
    '@babel/plugin-proposal-throw-expressions',
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    '@babel/plugin-proposal-partial-application',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-logical-assignment-operators',
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-do-expressions',
    [
        '@babel/plugin-proposal-decorators',
        {
            decoratorsBeforeExport: true,
            legacy: true,
        },
    ],
    '@babel/plugin-proposal-class-static-block',
    [
        '@babel/plugin-transform-runtime',
        {
            helpers: true,
            regenerator: true,
        },
    ],
    'inline-dotenv',
    'dynamic-import-node',
    'transform-export-extensions',
    '@emotion',
    'effector/babel-plugin',
    [
        '@babel/plugin-transform-react-jsx',
        {
            throwIfNamespace: false, // defaults to true
            runtime: 'classic', // defaults to classic
            // importSource: 'theme-ui', // defaults to react
        },
    ],
];
const isDevelopment = process.env.NODE_ENV !== 'production';

if (!isDevelopment) {
    plugins.push('transform-remove-debugger');
    plugins.push(['transform-remove-console', { exclude: ['error', 'warn'] }]);
} else {
    plugins.push(['react-refresh/babel']);
}

module.exports = {
    presets: [
        '@babel/preset-env',
        //
        '@babel/preset-typescript',
        //
        [
            '@babel/preset-react',
            {
                //     // runtime: 'automatic',
                //     // importSource: '@emotion/react',
                //     // pragma: 'dom', // default pragma is React.createElement (only in classic runtime)
                //     // pragmaFrag: 'DomFrag', // default is React.Fragment (only in classic runtime)
                throwIfNamespace: false, // defaults to true
                runtime: 'classic', // defaults to classic },
                // importSource: '@emotion/react',
            },
        ],
        [
            'next/babel',
            {
                'preset-react': {
                    runtime: 'classic',
                    throwIfNamespace: false, // defaults to true
                    // importSource: '@emotion/react',
                },
            },
        ],
        'babel-preset-gatsby',
    ],
    plugins,
};
