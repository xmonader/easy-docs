const { join } = require("path");

module.exports = {
    transpileDependencies: [
      'vuetify'
    ],
    outputDir: join(__dirname, 'docs'),
    publicPath: process.env.NODE_ENV === 'production' ? '/easy-docs/' : undefined
}