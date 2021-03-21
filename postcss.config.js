module.exports = {
    plugins: [
        require('autoprefixer'),
        require('mqpacker'),
        require('cssnano')({
            preset: [
                'default',
                {
                    discardComments: {
                        removeAll: true,
                    },
                },
            ],
        }),
    ],
};
