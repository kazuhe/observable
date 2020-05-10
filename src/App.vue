<template>
  <div id="app">
    <Header />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div>
      <p>{{ number }}</p>
      <button @click="increment">+</button>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/modules/Header.vue';

@Component({ // VueがClassを認識するためのアノテーション
  components: {
    Header
  },
})

export default class Home extends Vue { // Vueクラスを継承
  number = 5;

  increment () {
    return this.number += 1;
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
  color: $mainColor;
  font-weight: 400;
  line-height: 1.6;
  overflow: hidden;
}
a {
  color: $mainColor;
  text-decoration: none;
}
li {
  list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>