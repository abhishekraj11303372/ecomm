const HtmlWebapackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080,
    },
    plugins: [
        new HtmlWebapackPlugin({
            template: './public/index.html'
        })
    ]
};