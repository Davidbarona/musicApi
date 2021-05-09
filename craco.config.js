const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#5773ff',
                            '@component-background': '#18181d',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};