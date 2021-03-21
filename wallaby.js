// eslint-disable-next-line func-names
module.exports = function () {
    return {
        files: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.coffee'],

        tests: ['test/**/*Spec.js', 'test/**/*Spec.ts', 'test/**/*Spec.coffee'],
        env: {
            type: 'node',
            // kind: 'chrome',
            // params: {
            //     runner: '--headless --disable-gpu',
            // },
        },
        testFramework: 'jest',
        // preprocessors: {
        //     '**/*.js': (file) =>
        //         require('babel-core').transform(
        //             file.content,
        //             {
        //                 sourceMap: true,
        //                 filename: file.path,
        //             }
        //         ),
        //     '**/*.jsx': (file) =>
        //         require('babel-core').transform(
        //             file.content,
        //             {
        //                 sourceMap: true,
        //                 filename: file.path,
        //             }
        //         ),
        // },
        //
        // compilers: {
        //     '**/*.js': wallaby.compilers.babel({
        //         /* babel options
        //          * like `stage: n` for Babel 5.x or `presets: [...]` for Babel 6
        //          * (no need to duplicate babel.config.js, if you have it, it will be automatically loaded) */
        //
        //     }),
        //
        //     '**/*.ts': wallaby.compilers.typeScript({
        //         /* TypeScript compiler specific options
        //          * https://github.com/Microsoft/TypeScript/wiki/Compiler-Options
        //          * (no need to duplicate tsconfig.json, if you have it, it will be automatically used) */
        //     }),
        //
        //     '**/*.coffee': wallaby.compilers.coffeeScript({
        //         // CoffeeScript compiler specific options
        //     }),
        // },
    };
};
