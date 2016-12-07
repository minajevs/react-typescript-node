var glob = require("glob");

module.exports = {
    entry: {
        js: glob.sync("./app/web/js/*.js")
    },  
    output: {
        path: __dirname + "/app/web",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};