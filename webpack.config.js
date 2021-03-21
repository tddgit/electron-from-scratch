const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const { ProvidePlugin } = require('webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

require('dotenv').config();

const PATHS = require('./webpack-paths');

const isDevelopment = process.env.NODE_ENV !== 'production';

process.traceDeprecation = true;

const filename = (ext) => {
    return isDevelopment ? `[name].${ext}` : `[name].[contenthash].${ext}`;
};

const optimization = () => {
    const config = {
        // splitChunks: {
        //     cacheGroups: {
        //         vendor: {
        //             name: 'vendors',
        //             chunks: 'all',
        //             test: /node_modules/,
        //             enforce: true,
        //         },
        //     },
        // },
        minimize: false,
        // runtimeChunk: {
        //     name: 'runtime',
        // },
        // TODO: What it is runtimeChunk?
        minimizer: [
            // new TerserPlugin({
            //     // eslint-disable-next-line security/detect-unsafe-regex
            //     test: /\.js(\?.*)?$/i,
            //     parallel: true,
            // }),
            new ESBuildMinifyPlugin(),
            new CssMinimizerPlugin(),
        ],
    };

    return isDevelopment ? {} : config;
};

const plugins = [
    new VueLoaderPlugin(),

    new webpack.EnvironmentPlugin({}),
    new Dotenv({
        path: './.env', // Path to .env file (this is the default)
        safe: false, // load .env.example (defaults to "false" which does not
        // use dotenv-safe)
    }),

    new MiniCssExtractPlugin({
        filename: filename('css'),
    }),
    new ESLintPlugin({
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', 'vue', 'svelte'],
        fix: true,
    }),

    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core/,
        path.join(__dirname, './i'),
    ),
    new HtmlWebpackPlugin({
        template: './public/index.html',
        title: '',
        inject: 'body',
        minify: {
            collapseWhitespace: isDevelopment,
        },
    }),
    new CleanWebpackPlugin(),
    new ProvidePlugin({
        React: 'react',
        Vue: ['vue/dist/vue.esm.js', 'default'],
    }),
];

if (!isDevelopment) {
    plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
    );
    plugins.push(
        new CompressionPlugin({
            algorithm: 'gzip',
        }),
    );
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(
        new BundleAnalyzerPlugin({
            openAnalyzer: true,
            analyzerPort: 3002,
        }),
    );
    plugins.push(new WebpackManifestPlugin());
    plugins.push(new GenerateSW());

    plugins.push(new CopyWebpackPlugin([{ from: './public', to: './' }]));
} else {
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
        }),
    );
    plugins.push(
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false),
            // VERSION: JSON.stringify('5fa3b9'),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: '1+1',
            'typeof window': JSON.stringify('object'),
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
    );
    plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    );
    // plugins.push(
    //     new webpack.WatchIgnorePlugin({ paths: [/\.js$/, /\.d\.ts$/] }),
    // );
    plugins.push(
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerPort: 3001,
        }),
    );
}

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: ['webpack-hot-middleware/client?reload=true', PATHS.entry],

    context: PATHS.src,
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', 'vue', 'svelte'],

        //= ===============ALIASES FOR FOLDERS===============================
        alias: {
            '@': path.resolve(__dirname, 'src/components'),
        },
    },
    target: isDevelopment ? 'web' : 'browserslist',
    // watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
        ignored: /node_modules/,
    },

    devServer: {
        compress: true,
        overlay: true,
        // historyApiFallback: {
        //     index: 'index.html',
        // },
        historyApiFallback: true,
        stats: 'minimal',
        port: 3000,
        open: false,
        // after() {},
        hot: true,
        watchContentBase: true,
        contentBase: PATHS.src,
        // publicPath: 'http://localhost:9000',
        inline: true,
        clientLogLevel: 'silent',
    },
    optimization: optimization(),

    output: {
        filename: filename('js'),
        path: PATHS.build,
        chunkLoading: false,
        wasmLoading: false,
        assetModuleFilename: 'images/[hash][ext][query]',
        sourceMapFilename: '[name].js.map',
        // publicPath: '/',
    },
    // devtool: isDevelopment ? 'eval' : 'source-map',
    devtool: isDevelopment ? 'eval-cheap-source-map' : 'source-map',
    plugins,
    module: {
        rules: [
            {
                test: /\.component\.html$/i,
                // test: /\.html$/i,
                type: 'asset/source',
                exclude: /node_modules/,
                include: [PATHS.src],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
                include: [PATHS.src],
                use: ['source-map-loader', 'babel-loader'],
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                enforce: 'pre',
                include: [PATHS.src],
                use: ['source-map-loader', 'babel-loader'],
            },
            // {
            //     test: /\.{js,jsx}$/,
            //     loader: 'esbuild-loader',
            //     options: {
            //         loader: 'jsx', // Remove this if you're not using JSX
            //         target: 'es2015', // Syntax to compile to (see options below for possible values)
            //     },
            // },
            // =================BASIC TYPESCRIPT OPTIONS===============
            // {
            //     test: /\.(ts|tsx)$/,
            //     exclude: /node_modules/,
            //     include: [PATHS.src],
            //     use: 'ts-loader',
            // },
            // =======================================================
            // =================VUE TYPESCRIPT OPTIONS===============
            {
                test: /\.(ts|tsx)$/,
                include: [PATHS.src],
                use: [
                    'angular2-template-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                        },
                    },
                ],
            },
            // {
            //     test: /\.tsx?$/,
            //     loader: 'esbuild-loader',
            //     options: {
            //         loader: 'tsx', // Or 'ts' if you don't need tsx
            //         target: 'es2015',
            //     },
            // },
            //= =======================================================
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                include: [PATHS.src],
                // use: 'vue-loader',
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                        sass:
                            'vue-style-loader!css-loader!sass-loader?indentedSyntax', // <style lang="sass">
                    },
                },
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                include: [PATHS.src],
                use: [
                    isDevelopment
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                include: [PATHS.src],
                use: [
                    // 'vue-style-loader',
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    },
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    // 'vue-style-loader',
                    'to-string-loader',

                    isDevelopment
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                include: [PATHS.src],
                type: 'asset/resource',
            },
            {
                test: /\.(xml)$/,
                include: [PATHS.src],
                use: ['xml-loader'],
            },
            {
                test: /\.(csv)$/,
                include: [PATHS.src],
                use: ['csv-loader'],
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg|ico)$/,
                include: [PATHS.src],
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 30 * 1024,
                    },
                },
            },

            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                    {
                        loader: 'markdown-loader',
                        options: {
                            pedantic: true,
                        },
                    },
                ],
            },
            {
                test: /\.pug$/,
                oneOf: [
                    {
                        resourceQuery: /^\?vue/,
                        use: ['pug-plain-loader'],
                    },

                    {
                        use: ['raw-loader', 'pug-plain-loader'],
                    },
                ],
            },
            // {
            //     test: /node_modules\/vfile\/core\.js/,
            //     use: [
            //         {
            //             loader: 'imports-loader',
            //             options: {
            //                 type: 'commonjs',
            //                 imports: ['single process/browser process'],
            //             },
            //         },
            //     ],
            // },
        ],
    },
};

// new NodemonPlugin({
//     // If using more than one entry, you can specify
//     // which output file will be restarted.
//     script: './src/index.jsx',
//
//     // What to watch.
//     watch: path.resolve(__dirname, './src'),
//
//     // Arguments to pass to the script being watched.
//     args: ['demo'],
//     // Node arguments.
//     nodeArgs: ['--debug=9222'],
//
//     // Files to ignore.
//     ignore: ['*.js.map'],
//
//     // Extensions to watch.
//     ext: 'js,njk,json,ts,tsx,html,vue,svelte,css,scss,less',
//
//     // Unlike the cli option, delay here is in milliseconds (also note that it's a string).
//     // Here's 1 second delay:
//     delay: '1000',
//
//     // Detailed log.
//     verbose: true,
// }),

// {
//     test: /\.html$/i,
//     // test: /\.html$/i,
//     type: 'asset/source',
//     exclude: /node_modules/,
//     include: [PATHS.src],
// },

// new LiveReloadPlugin(),

// const LiveReloadPlugin = require('webpack-livereload-plugin');
// const NodemonPlugin = require('nodemon-webpack-plugin');
// use: ['file-loader'],

// use: [
//     {
//         loader: require.resolve('babel-loader'),
//         options: {
//             plugins: [
//                 isDevelopment &&
//                     require.resolve('react-refresh/babel'),
//             ].filter(Boolean),
//         },
//     },
// ],

// use: [
//     {
//         loader: require.resolve('ts-loader'),
//         options: {
//             plugins: [
//                 isDevelopment &&
//                     require.resolve('react-refresh/babel'),
//             ].filter(Boolean),
//         },
//     },
// ],
//
// {
//     test: /\.js$/,
//         exclude: /node_modules/,
//     include: [PATHS.src],
//     use: ['babel-loader'],
// },
// {
//     test: /\.(ts)$/,
//         exclude: /node_modules/,
//     include: [PATHS.src],
//     use: ['ts-loader', 'angular2-template-loader'],
// },

// new CopyWebpackPlugin([
//     {
//         from: path.resolve(__dirname, 'src/images/favicon.ico'),
//         to: path.resolve(__dirname, 'dist'),
//     },
// ]),

// new webpack.SourceMapDevToolPlugin({
//     filename: '[name].js.map',
//     exclude: ['vendor.js'],
// }),

// isDevelopment
//     ? 'style-loader'
//     : MiniCssExtractPlugin.loader,

// const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
//
// // globals
// const IS_PRODUCTION = process.env.NODE_ENV === 'production';
// const DEV_PORT = process.env.PORT || 9000;
// const PACKAGE_NAME = getPackageName();
// const plugins = [
//     new ForkTsCheckerWebpackPlugin(
//         IS_PRODUCTION
//             ? {
//                   async: false,
//                   typescript: {
//                       configFile: 'src/tsconfig.json',
//                       useTypescriptIncrementalApi: true,
//                       memoryLimit: 4096,
//                   },
//               }
//             : {
//                   typescript: {
//                       configFile: 'src/tsconfig.json',
//                   },
//               },
//     ),
//
//     // CSS extraction is only enabled in production (see scssLoaders below).
//     new MiniCssExtractPlugin({ filename: '[name].css' }),
//
//     // pipe env variables to FE build, setting defaults where appropriate (null means optional)
//     new webpack.EnvironmentPlugin({
//         NODE_ENV: 'development',
//         BLUEPRINT_NAMESPACE: null,
//         REACT_APP_BLUEPRINT_NAMESPACE: null,
//     }),
// ];
//
// if (!IS_PRODUCTION) {
//     plugins.push(
//         new ReactRefreshWebpackPlugin(),
//         new ForkTsCheckerNotifierWebpackPlugin({
//             title: `${PACKAGE_NAME}: typescript`,
//             excludeWarnings: false,
//         }),
//         new WebpackNotifierPlugin({ title: `${PACKAGE_NAME}: webpack` }),
//         new webpack.HotModuleReplacementPlugin(),
//     );
// }
