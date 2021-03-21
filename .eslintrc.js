module.exports = {
    root: true,
    env: {
        commonjs: true,
        node: true,
        browser: true,
        es6: true,
        jest: true,
        mocha: true,
        'cypress/globals': true,
        // 'react-native/react-native': true,
    },
    processor: 'disable/disable',
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'react-app',
        'react-app/jest',
        'plugin:redux-saga/recommended',
        'plugin:react/recommended',
        'plugin:json/recommended',
        'plugin:css-modules/recommended',
        'plugin:cypress/recommended',
        'plugin:jest-formatting/recommended',
        'plugin:security/recommended',
        'plugin:jest-dom/recommended',
        'plugin:markdown/recommended',
        'plugin:jsx-a11y/recommended',
        // 'plugin:node/recommended',
        'plugin:react-redux/recommended',
        'plugin:prettier/recommended',
        'plugin:redux-saga/recommended',
        'prettier',
        // 'plugin:you-dont-need-lodash-underscore/compatible',
        // 'plugin:lodash/recommended',
        // 'plugin:lodash/v3',
    ],
    plugins: [
        'react',
        'react-hooks',
        'import',
        'html',
        'css-modules',
        'import',
        'babel',
        'cypress',
        'jest-formatting',
        'optimize-regex',
        'security',
        'no-constructor-bind',
        'sql',
        'jest-dom',
        'disable',
        'jsx-a11y',
        'graphql',
        'react-redux',
        'eslint-plugin-no-cyrillic-string',
        '@emotion/eslint-plugin',
        'redux-saga',
        // "optimize-regex/all",
        // 'react-native',
        // 'jsdoc',
        // 'lodash',
    ],

    //  "parser": "@typescript-eslint/parser",
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    // ignorePatterns: ['.eslintrc.js'],
    rules: {
        'react/state-in-constructor': ['off', 'always'],
        'react/prop-types': 'off',
        'no-shadow': 1,
        '@emotion/jsx-import': 'error',
        '@emotion/no-vanilla': 'error',
        '@emotion/import-from-emotion': 'error',
        '@emotion/styled-import': 'error',
        // 'react/state-in-constructor': ['error', 'always'],
        'class-methods-use-this': [
            'error',
            { exceptMethods: ['render', 'componentDidCatch'] },
        ],
        // 'lodash/prefer-lodash-method': 0,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 1,

        'prettier/prettier': 'off',
        'prefer-destructuring': 'off',
        'no-cyrillic-string/no-cyrillic-string': 'error',
        'jest-dom/prefer-checked': 'error',
        'jest-dom/prefer-enabled-disabled': 'error',
        'jest-dom/prefer-required': 'error',
        'jest-dom/prefer-to-have-attribute': 'error',
        'import/no-unresolved': 'error',
        'no-constructor-bind/no-constructor-bind': 'error',
        'no-constructor-bind/no-constructor-state': 'error',
        // 'import/no-unresolved': 0,
        'optimize-regex/optimize-regex': [
            'warn',
            {
                blacklist: ['charClassClassrangesMerge'],
            },
        ],
        'cypress/no-assigning-return-values': 'error',
        'cypress/no-unnecessary-waiting': 'error',
        'cypress/assertion-before-screenshot': 'warn',
        'cypress/no-force': 'warn',
        'cypress/no-async-tests': 'error',
        'no-new': 'off',
        '@typescript-eslint/indent': ['off'],
        '@typescript-eslint/dot-notation': ['off'],
        '@typescript-eslint/ban-ts-comment': ['off'],

        'no-undef': 2,
        'no-plusplus': 0,
        camelcase: 1,
        'max-len': [0],
        'import/no-extraneous-dependencies': [
            'error',
            {
                optionalDependencies: ['test/unit/index.jsx'],
            },
        ],
        // 'import/no-extraneous-dependencies':   0,
        'no-unused-expressions': ['error', { allowTernary: true }],
        'comma-dangle': 0,
        'object-curly-newline': 0,
        'no-unused-vars': 0,
        'no-useless-escape': 0,
        'guard-for-in': 1,
        'no-console': 0, // process.env.NODE_ENV ===
        // 'production' ? 'error' : 'off',
        'no-debugger': 0, // process.env.NODE_ENV ===
        // 'production' ? 'error' : 'off',
        'import/default': 0,
        'import/extensions': 0,
        'import/no-duplicates': 0,
        'no-param-reassign': 0,
        'quote-props': ['off', 'consistent'],
        'import/named': 0,
        'import/namespace': 0,
        'import/prefer-default-export': 0,
        'import/no-named-as-default': 2,
        'no-lone-blocks': 0,
        'react/jsx-boolean-value': 0,
        'react/jsx-filename-extension': 0,
        'jsx-a11y/interactive-supports-focus': 1,
        'react/no-multi-comp': 0,
        'global-require': 0,
        'babel/new-cap': 1,
        'babel/camelcase': 1,
        'babel/no-invalid-this': 1,
        'babel/semi': 1,
        'babel/no-unused-expressions': 1,
        'babel/valid-typeof': 1,
        'new-cap': [
            2,
            {
                capIsNewExceptions: ['List', 'Map', 'Set'],
            },
        ],
        'no-use-before-define': [
            'error',
            {
                functions: false,
            },
        ],
        'linebreak-style': ['error', 'unix'],
        quotes: ['off', 'single'],
        semi: ['error', 'always'],
        'no-cond-assign': ['error', 'always'],
        'vue/order-in-components': [
            'error',
            {
                order: [
                    'el',
                    'name',
                    'parent',
                    'functional',
                    ['delimiters', 'comments'],
                    ['components', 'directives', 'filters'],
                    'extends',
                    'mixins',
                    'inheritAttrs',
                    'model',
                    ['props', 'propsData'],
                    'data',
                    'computed',
                    'watch',
                    'LIFECYCLE_HOOKS',
                    'methods',
                    ['template', 'render'],
                    'renderError',
                ],
            },
        ],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'never',
            },
        ],
        'vue/html-closing-bracket-spacing': [
            'error',
            {
                startTag: 'never',
                endTag: 'never',
                selfClosingTag: 'always',
            },
        ],
        'vue/script-indent': [
            'error',
            2,
            {
                baseIndent: 0,
                switchCase: 1,
                ignores: [],
            },
        ],
        'vue/max-attributes-per-line': [
            2,
            {
                singleline: 1,
                multiline: {
                    max: 1,
                    allowFirstLine: false,
                },
            },
        ],
        'sql/format': [
            2,
            {
                ignoreExpressions: false,
                ignoreInline: true,
                ignoreTagless: true,
            },
        ],
        'sql/no-unsafe-query': [
            2,
            {
                allowLiteral: false,
            },
        ],
        // 'node/exports-style': ['error', 'module.exports'],
        // 'node/file-extension-in-import': ['error', 'always'],
        // 'node/prefer-global/buffer': ['error', 'always'],
        // 'node/prefer-global/console': ['error', 'always'],
        // 'node/prefer-global/process': ['error', 'always'],
        // 'node/prefer-global/url-search-params': ['error', 'always'],
        // 'node/prefer-global/url': ['error', 'always'],
        // 'node/prefer-promises/dns': 'error',
        // 'node/prefer-promises/fs': 'error',
        // 'node/no-unpublished-require': 0,
        // 'node/no-unsupported-features/es-syntax': 0,
        // 'node/file-extension-in-import': 0,
        // 'node/no-extraneous-require': 0,

        // 'jsdoc/check-access': 1, // Recommended
        // 'jsdoc/check-alignment': 1, // Recommended
        // 'jsdoc/check-examples': 0,
        // 'jsdoc/check-indentation': 1,
        // 'jsdoc/check-line-alignment': 1,
        // 'jsdoc/check-param-names': 1, // Recommended
        // 'jsdoc/check-property-names': 1, // Recommended
        // 'jsdoc/check-syntax': 1,
        // 'jsdoc/check-tag-names': 1, // Recommended
        // 'jsdoc/check-types': 1, // Recommended
        // 'jsdoc/check-values': 1, // Recommended
        // 'jsdoc/empty-tags': 1, // Recommended
        // 'jsdoc/implements-on-classes': 1, // Recommended
        // 'jsdoc/match-description': 1,
        // 'jsdoc/newline-after-description': 1, // Recommended
        // 'jsdoc/no-bad-blocks': 1,
        // 'jsdoc/no-defaults': 1,
        // 'jsdoc/no-types': 1,
        // 'jsdoc/no-undefined-types': 1, // Recommended
        // 'jsdoc/require-description': 0,
        // 'jsdoc/require-description-complete-sentence': 1,
        // 'jsdoc/require-example': 0,
        // 'jsdoc/require-file-overview': 0,
        // 'jsdoc/require-hyphen-before-param-description': 1,
        // 'jsdoc/require-jsdoc': 1, // Recommended
        // 'jsdoc/require-param': 1, // Recommended
        // 'jsdoc/require-param-description': 1, // Recommended
        // 'jsdoc/require-param-name': 1, // Recommended
        // 'jsdoc/require-param-type': 1, // Recommended
        // 'jsdoc/require-property': 1, // Recommended
        // 'jsdoc/require-property-description': 1, // Recommended
        // 'jsdoc/require-property-name': 1, // Recommended
        // 'jsdoc/require-property-type': 1, // Recommended
        // 'jsdoc/require-returns': 1, // Recommended
        // 'jsdoc/require-returns-check': 1, // Recommended
        // 'jsdoc/require-returns-description': 1, // Recommended
        // 'jsdoc/require-returns-type': 1, // Recommended
        // 'jsdoc/require-throws': 1,
        // 'jsdoc/require-yields': 1, // Recommended
        // 'jsdoc/require-yields-check': 1, // Recommended
        // 'jsdoc/valid-types': 1, // Recommended
        //
        // 'react-native/no-unused-styles': 2,
        // 'react-native/split-platform-components': 2,
        // 'react-native/no-inline-styles': 2,
        // 'react-native/no-color-literals': 2,
        // 'react-native/no-raw-text': 2,
        // 'react-native/no-single-element-style-arrays': 2,
    },
    ignorePatterns: ['node_modules/', 'dist/', 'public/'],

    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    settings: {
        'html/indent': '+4', // indentation is the <script> indentation plus

        'html/report-bad-indent': 'off',
        'import/parser': 'babel-eslint',
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolve': {
            moduleDirectory: ['node_modules', 'src'],
        },
        react: {
            version: 'detect',
        },
        'html/html-extensions': ['.html', '.we'],
        'html/xml-extensions': ['.html'],

        'html/javascript-mime-types': '/^text\\/(javascript|jsx)$/',
        //    "html/indent": "0",
        //    // code should start at the beginning of the line
        //    (no initial indentation).
        //    "html/indent": "+4",
        //    // indentation is the <script> indentation plus two spaces.

        // 'react-native/style-sheet-object-names': [
        //     'EStyleSheet',
        //     'OtherStyleSheet',
        //     'PStyleSheet',
        // ],
        // indentation is one tab at the beginning of the line.
    },
    overrides: [
        {
            files: ['tests/**/*.test.js'],
            settings: {
                'disable/plugins': ['react'],
            },
        },
        {
            // Enable the Markdown processor for all .md files.
            files: ['**/*.md'],
            processor: 'markdown/markdown',
            rules: {
                // 2. Disable other rules.
                'no-console': 'off',
                'import/no-unresolved': 'off',
            },
        },
        //= =============================TYPESCRIPT=========================
        //
        //= ================================================================
        {
            files: ['**/*.ts', '**/*.tsx'],
            env: {
                browser: true,
                es6: true,
                node: true,
            },
            extends: [
                // 'plugin:@angular-eslint/recommended',
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'airbnb-typescript',
                'plugin:react/recommended',
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:@typescript-eslint/recommended',
                //
                'react-app',
                'react-app/jest',
                'plugin:react/recommended',
                'plugin:redux-saga/recommended',
                'plugin:json/recommended',
                'plugin:css-modules/recommended',
                'plugin:cypress/recommended',
                'plugin:jest-formatting/recommended',
                'plugin:security/recommended',
                'plugin:jest-dom/recommended',
                'plugin:markdown/recommended',
                'plugin:jsx-a11y/recommended',
                // 'plugin:node/recommended',
                'plugin:react-redux/recommended',
                'plugin:prettier/recommended',
                'prettier',
                //
                // 'plugin:@angular-eslint/template/process-inline-templates',
            ],
            globals: {
                Atomics: 'readonly',
                SharedArrayBuffer: 'readonly',
            },
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                project: './tsconfig.json',
                // createDefaultProgram: true,
            },
            plugins: [
                'react',
                '@typescript-eslint',
                'eslint-plugin-tsdoc',
                //
                'react',
                'react-hooks',
                'import',
                'html',
                'css-modules',
                'import',
                'babel',
                'cypress',
                'jest-formatting',
                'optimize-regex',
                'security',
                'no-constructor-bind',
                'sql',
                'jest-dom',
                'disable',
                'jsx-a11y',
                'graphql',
                'react-redux',
                'eslint-plugin-no-cyrillic-string',
                '@emotion/eslint-plugin',
                'redux-saga',
                //
            ],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': ['error'],
                'react/prop-types': 'off',
                'no-shadow': 1,
                '@emotion/jsx-import': 'error',
                '@emotion/no-vanilla': 'error',
                '@emotion/import-from-emotion': 'error',
                '@emotion/styled-import': 'error',
                'react/state-in-constructor': ['off', 'always'],
                'class-methods-use-this': [
                    'error',
                    { exceptMethods: ['render', 'componentDidCatch'] },
                ],
                // 'lodash/prefer-lodash-method': 0,
                'react-hooks/rules-of-hooks': 2,
                'react-hooks/exhaustive-deps': 1,

                'prettier/prettier': 'off',
                'prefer-destructuring': 'off',
                'no-cyrillic-string/no-cyrillic-string': 'error',
                'jest-dom/prefer-checked': 'error',
                'jest-dom/prefer-enabled-disabled': 'error',
                'jest-dom/prefer-required': 'error',
                'jest-dom/prefer-to-have-attribute': 'error',
                'import/no-unresolved': 'error',
                'no-constructor-bind/no-constructor-bind': 'error',
                'no-constructor-bind/no-constructor-state': 'error',
                // 'import/no-unresolved': 0,
                'optimize-regex/optimize-regex': [
                    'warn',
                    {
                        blacklist: ['charClassClassrangesMerge'],
                    },
                ],
                'cypress/no-assigning-return-values': 'error',
                'cypress/no-unnecessary-waiting': 'error',
                'cypress/assertion-before-screenshot': 'warn',
                'cypress/no-force': 'warn',
                'cypress/no-async-tests': 'error',
                'no-new': 'off',
                '@typescript-eslint/indent': ['off'],
                '@typescript-eslint/dot-notation': ['off'],
                '@typescript-eslint/ban-ts-comment': ['off'],

                'no-undef': 2,
                'no-plusplus': 0,
                camelcase: 1,
                'max-len': [0],
                'import/no-extraneous-dependencies': [
                    'error',
                    {
                        optionalDependencies: ['test/unit/index.jsx'],
                    },
                ],
                // 'import/no-extraneous-dependencies':   0,
                'no-unused-expressions': ['error', { allowTernary: true }],
                'comma-dangle': 0,
                'object-curly-newline': 0,
                'no-unused-vars': 0,
                'no-useless-escape': 0,
                'guard-for-in': 1,
                'no-console': 0, // process.env.NODE_ENV ===
                // 'production' ? 'error' : 'off',
                'no-debugger': 0, // process.env.NODE_ENV ===
                // 'production' ? 'error' : 'off',
                'import/default': 0,
                'import/extensions': 0,
                'import/no-duplicates': 0,
                'no-param-reassign': 0,
                'quote-props': ['off', 'consistent'],
                'import/named': 0,
                'import/namespace': 0,
                'import/prefer-default-export': 0,
                'import/no-named-as-default': 2,
                'no-lone-blocks': 0,
                'react/jsx-boolean-value': 0,
                'react/jsx-filename-extension': 0,
                'jsx-a11y/interactive-supports-focus': 1,
                'react/no-multi-comp': 0,
                'global-require': 0,
                'babel/new-cap': 1,
                'babel/camelcase': 1,
                'babel/no-invalid-this': 1,
                'babel/semi': 1,
                'babel/no-unused-expressions': 1,
                'babel/valid-typeof': 1,
                'new-cap': [
                    2,
                    {
                        capIsNewExceptions: ['List', 'Map', 'Set'],
                    },
                ],

                'linebreak-style': ['error', 'unix'],
                quotes: ['off', 'single'],
                semi: ['error', 'always'],
                'no-cond-assign': ['error', 'always'],
                'vue/order-in-components': [
                    'error',
                    {
                        order: [
                            'el',
                            'name',
                            'parent',
                            'functional',
                            ['delimiters', 'comments'],
                            ['components', 'directives', 'filters'],
                            'extends',
                            'mixins',
                            'inheritAttrs',
                            'model',
                            ['props', 'propsData'],
                            'data',
                            'computed',
                            'watch',
                            'LIFECYCLE_HOOKS',
                            'methods',
                            ['template', 'render'],
                            'renderError',
                        ],
                    },
                ],
                'vue/html-closing-bracket-newline': [
                    'error',
                    {
                        singleline: 'never',
                        multiline: 'never',
                    },
                ],
                'vue/html-closing-bracket-spacing': [
                    'error',
                    {
                        startTag: 'never',
                        endTag: 'never',
                        selfClosingTag: 'always',
                    },
                ],
                'vue/script-indent': [
                    'error',
                    2,
                    {
                        baseIndent: 0,
                        switchCase: 1,
                        ignores: [],
                    },
                ],
                'vue/max-attributes-per-line': [
                    2,
                    {
                        singleline: 1,
                        multiline: {
                            max: 1,
                            allowFirstLine: false,
                        },
                    },
                ],
                'sql/format': [
                    2,
                    {
                        ignoreExpressions: false,
                        ignoreInline: true,
                        ignoreTagless: true,
                    },
                ],
                'sql/no-unsafe-query': [
                    2,
                    {
                        allowLiteral: false,
                    },
                ],
                // 'node/exports-style': ['error', 'module.exports'],
                // 'node/file-extension-in-import': ['error', 'always'],
                // 'node/prefer-global/buffer': ['error', 'always'],
                // 'node/prefer-global/console': ['error', 'always'],
                // 'node/prefer-global/process': ['error', 'always'],
                // 'node/prefer-global/url-search-params': ['error', 'always'],
                // 'node/prefer-global/url': ['error', 'always'],
                // 'node/prefer-promises/dns': 'error',
                // 'node/prefer-promises/fs': 'error',
                // 'node/no-unpublished-require': 0,
                // 'node/no-unsupported-features/es-syntax': 0,
                // 'node/file-extension-in-import': 0,
                // 'node/no-extraneous-require': 0,

                // 'jsdoc/check-access': 1, // Recommended
                // 'jsdoc/check-alignment': 1, // Recommended
                // 'jsdoc/check-examples': 0,
                // 'jsdoc/check-indentation': 1,
                // 'jsdoc/check-line-alignment': 1,
                // 'jsdoc/check-param-names': 1, // Recommended
                // 'jsdoc/check-property-names': 1, // Recommended
                // 'jsdoc/check-syntax': 1,
                // 'jsdoc/check-tag-names': 1, // Recommended
                // 'jsdoc/check-types': 1, // Recommended
                // 'jsdoc/check-values': 1, // Recommended
                // 'jsdoc/empty-tags': 1, // Recommended
                // 'jsdoc/implements-on-classes': 1, // Recommended
                // 'jsdoc/match-description': 1,
                // 'jsdoc/newline-after-description': 1, // Recommended
                // 'jsdoc/no-bad-blocks': 1,
                // 'jsdoc/no-defaults': 1,
                // 'jsdoc/no-types': 1,
                // 'jsdoc/no-undefined-types': 1, // Recommended
                // 'jsdoc/require-description': 0,
                // 'jsdoc/require-description-complete-sentence': 1,
                // 'jsdoc/require-example': 0,
                // 'jsdoc/require-file-overview': 0,
                // 'jsdoc/require-hyphen-before-param-description': 1,
                // 'jsdoc/require-jsdoc': 1, // Recommended
                // 'jsdoc/require-param': 1, // Recommended
                // 'jsdoc/require-param-description': 1, // Recommended
                // 'jsdoc/require-param-name': 1, // Recommended
                // 'jsdoc/require-param-type': 1, // Recommended
                // 'jsdoc/require-property': 1, // Recommended
                // 'jsdoc/require-property-description': 1, // Recommended
                // 'jsdoc/require-property-name': 1, // Recommended
                // 'jsdoc/require-property-type': 1, // Recommended
                // 'jsdoc/require-returns': 1, // Recommended
                // 'jsdoc/require-returns-check': 1, // Recommended
                // 'jsdoc/require-returns-description': 1, // Recommended
                // 'jsdoc/require-returns-type': 1, // Recommended
                // 'jsdoc/require-throws': 1,
                // 'jsdoc/require-yields': 1, // Recommended
                // 'jsdoc/require-yields-check': 1, // Recommended
                // 'jsdoc/valid-types': 1, // Recommended
                //
                // 'react-native/no-unused-styles': 2,
                // 'react-native/split-platform-components': 2,
                // 'react-native/no-inline-styles': 2,
                // 'react-native/no-color-literals': 2,
                // 'react-native/no-raw-text': 2,
                // 'react-native/no-single-element-style-arrays': 2,
            },
            settings: {
                react: {
                    version: 'detect',
                },
            },
        },
        //= ==============================HTML=========================
        //
        //= ==========================================================
        {
            files: ['*.html'],

            rules: {},
        },

        //= ==============================VUE=========================
        //
        //= ==========================================================

        {
            files: ['**/*.vue'],
            env: {
                browser: true,
                es6: true,
                node: true,
            },
            extends: [
                'plugin:vue/recommended',
                '@vue/airbnb',
                'plugin:vue/vue3-recommended',
            ],
            plugins: [],
            rules: {
                'vue/html-indent': 'off',
                'vue/max-attributes-per-line': 'off',
                'vue/html-self-closing': 'off',
                indent: 'off',
                quotes: ['error', 'single'],
                'comma-dangle': ['error', 'always-multiline'],
                'no-undef': 2,
                'no-unused-vars': 2,
                'no-useless-escape': 0,
                'no-console': 0,
                'no-use-before-define': 0,
                'no-param-reassign': 0,
            },
            settings: {},
        },
        //= =============================SVELTE=============================
        //
        //= ================================================================
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3',
            parser: '@typescript-eslint/parser',
            // add the TypeScript parser
            plugins: [
                'svelte3',
                '@typescript-eslint',
                // add the TypeScript plugin
            ],
            settings: {
                'svelte3/typescript': "require('typescript')",
                // pass the TypeScript package to the Sve lte plugin
                // ...
            },
            parserOptions: {
                // add these parser options
                tsconfigRootDir: '__dirname',
                project: './tsconfig.json',
                sourceType: 'module',
                extraFileExtensions: ['.svelte'],
                createDefaultProgram: true,
            },
            extends: [
                // then, enable whichever type-aware rules you want to use
                'eslint:recommended',
                'airbnb-typescript',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            rules: {
                '@typesctipt-eslint/indent': ['error', 4],
                'linebreak-style': ['error', 'unix'],
                quotes: ['error', 'single'],
                semi: ['error', 'always'],
                'no-undef': 1,
                // override default options for rules from base configurations
                // 'comma-dangle': ['error', 'always'],npm install
                // --global @vue/cli
                'no-cond-assign': ['error', 'always'],
                // disable rules from base configurations
                'no-console': 'off',
            },
        },
    ],
};

//  [
//    // then, enable whichever type-aware rules you want to use
//    //        "eslint:recommended",
/// /    "airbnb-typescript"
//    //    "plugin:@typescript-eslint/recommended",
//    //    "plugin:@typescript-eslint/recommended-requiring-type-checking"
//  ],
// parser: '@typescript-eslint/parser', // add the TypeScript parser
// plugins: ['@typescript-eslint'], // add the TypeScript plugin
// parserOptions: {
//     // add these parser options
//     tsconfigRootDir: __dirname,
//     project: './tsconfig.json',
//     sourceType: 'module',
//     createDefaultProgram: true,
// },
