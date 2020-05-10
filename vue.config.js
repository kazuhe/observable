module.exports = {
  css: { // 全ページ共有のscss変数定義ファイルを読込
    loaderOptions: {
      sass: {
        prependData: `@import '@/assets/scss/_define.scss';`
      }
    }
  }
};