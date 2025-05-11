module.exports = {
    presets: [
        "@babel/preset-env", // Transpile ES6+ down to ES5
        "@babel/preset-react", // Transpile JSX and other React syntax
        "@babel/preset-typescript", // Transpile TypeScript
    ],
    plugins: [
        // Add any plugins you need here
        ["@babel/plugin-proposal-class-properties", { loose: true }],
        ["@babel/plugin-proposal-object-rest-spread"],
    ],
};
