<template>
  <div id="app" class="container">
    <Sidebar @munishi="muni" />
    <div class="main">
      <Header />
      <div class="main_inner">
        <p>{{ number }}</p>
        <button @click="increment">+</button>
        <router-view /> <!-- URLで判断されたrouterの中身を動的に表示 -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/modules/Header.vue';
import Sidebar from '@/components/modules/Sidebar.vue';

@Component({ // VueがClassを認識するためのアノテーション
  components: {
    Header,
    Sidebar
  },
})

export default class App extends Vue { // Vueクラスを継承
  number = 5;
  public sidebarMinimum = 'false'; // サイドバー最小化の状態管理

  increment () {
    return this.number += 1;
  }

  public muni(value: string) {
    console.log(value);
    this.sidebarMinimum = value;
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
  overflow: hidden;
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
}
.main {
  width: 100%;
  background-color: $thinColor;
}
.main_inner {
  padding: 0 30px;
}

// unit Compornets
.unit {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
}
</style>