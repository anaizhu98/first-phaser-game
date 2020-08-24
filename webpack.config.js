const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src/main.ts"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        port: 3000,
        host: "0.0.0.0",
        publicPath: "/dist/",
        contentBase: path.resolve(__dirname, "src"),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: "/node_modules/",
            },
            {
                test: /\.js$/,
                loader: "eslint-loader",
                exclude: "/node_modules/",
            },
            {
                test: require.resolve("phaser"),
                loader: "expose-loader",
                options: {
                    exposes: ["Phaser"],
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
};