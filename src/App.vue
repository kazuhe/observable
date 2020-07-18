<template>
  <div id="app" class="container">
    <router-view />
    <!-- URLで判断されたrouterの中身を動的に表示 -->
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class App extends Vue {
  // Vueクラスを継承
  private sidebarState = false // サイドバー最小化の状態管理

  public minimizeSidebar(sidebarState: boolean) {
    // ← 引数で受け取る
    this.sidebarState = sidebarState
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
  min-height: 0;
  min-width: 0;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
html {
  font-size: 10px;
}
body {
  font-family: 'Comfortaa', 'Noto Sans JP', sans-serif;
  font-size: 1.4rem;
  color: $textColor;
  font-weight: 400;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
a {
  color: $textColor;
  text-decoration: none;
}
li {
  list-style: none;
}
.container {
  display: flex;
  height: 100vh;
  min-width: 768px;
}

// unit Compornets
.unit {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
}
</style>
