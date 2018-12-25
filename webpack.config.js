const path = require("path");

// module.exports = {
// 	entry: "./lib/renderers/dom.js",
// 	output: {
// 		path: path.resolve(__dirname, "public"),
// 		filename: "bundle.js"
// 	},
// 	module: {
// 		rules: [{ test: /\.js$/, exclude: /node_module/, use: "babel-loader" }]
// 	}
// };

const webpack = require("webpack");

module.exports = {
	entry: {
		vendor: [
			"react",
			"react-dom",
			"lodash.pickby",
			"lodash.debounce",
			"react-addons-perf",
			"prop-types"
		],
		app: ["./lib/renderers/dom.js"]
	},
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["react", "env", "stage-2"]
					}
				}
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor"
		})
	]
};
