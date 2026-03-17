const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/foreign-trade-website/" // 替换为你的仓库名
      : "/",
});
