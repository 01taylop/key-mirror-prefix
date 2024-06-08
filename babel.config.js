module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
  ],
  env: {
    cjs: {
      presets: [["@babel/preset-env", { modules: "commonjs" }]],
    },
    esm: {
      presets: [["@babel/preset-env", { modules: false }]],
    },
  },
}
