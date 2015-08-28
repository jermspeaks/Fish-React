module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname,
        filename: "build/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
};
