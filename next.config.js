const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = {
  reactStrictMode: true,
  presets: ["next/babel"],
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
}