module.exports = function(api) {
    api.cache(true);

    const presets = [
        "next/babel",
        "@babel/preset-env",
        "@babel/preset-react",
        ["@babel/preset-typescript", { isTSX: true, allExtensions: true }]
    ];

    const plugins = [
        'babel-plugin-styled-components',
    ];

    return {
        presets,
        plugins
    };
};