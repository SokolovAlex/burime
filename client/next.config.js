const path = require("path");
const withCustomBabelConfigFile = require("next-plugin-custom-babel-config");

const isProd = process.env.NODE_ENV === 'prod';
const distDir = isProd ? '.next_prod' : '.next';

module.exports = withCustomBabelConfigFile(
    {
        babelConfigFile: path.resolve("./babel.config.js"),
        distDir,
        env: {
            baseServerUrl: isProd ? 'http://134.0.118.122:3003' : 'http://localhost:3003',
        },
    }
);