const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

/**
 *
 * @param {*} env
 * @param {import("webpack").CliConfigOptions} options
 */
module.exports = (env, options) => {
    const plugins = [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "src/index.html"),
        }),
    ];
    if (options.mode === "production") {
        plugins.push(
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, "assets"),
                        to: path.resolve(__dirname, "dist/assets"),
                    },
                ],
            })
        );
    }

    return {
        entry: path.resolve(__dirname, "src/main.ts"),
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].[hash].js",
            publicPath: "/",
        },
        optimization: {
            splitChunks: {
                chunks: "all",
                maxSize: 255 * 1024,
            },
        },
        plugins,
        devServer: {
            hot: true,
            port: 3000,
            host: "0.0.0.0",
            publicPath: "/",
            contentBase: path.resolve(__dirname, "assets"),
            contentBasePublicPath: "/assets",
            compress: true,
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
                {
                    test: /\.(png|jpg|jpeg|json|bmp|svg)/i,
                    use: ["file-loader"],
                },
            ],
        },
        resolve: {
            extensions: [".ts", ".js"],
            alias: {
                "@": path.resolve(__dirname, "src"),
                "@assets": path.resolve(__dirname, "assets"),
            },
        },
    };
};
