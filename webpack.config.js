var glob = require("glob");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        js: glob.sync("./app/web/js/*.js")
    },
    output: {
        path: __dirname + "/app/web",
        filename: "bundle.js"
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: __dirname + "/src/web",
                to: __dirname + "/app/web"
            }
        ], {
            ignore: [ "*.js", "*.ts", "*.jsx", "*.tsx" ]    
        })
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};