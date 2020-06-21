<template>
  <div :class="{'-max': sidebarState}" class="wiki">
    <Sidebar :class="{'-mini': sidebarState}" @click="minimizeSidebar" />
    <Header />
    <div class="wiki_inner">
      <p>Wiki number {{ $route.params.id }}</p>
    
      <router-link to="/wiki/1">1</router-link>
      <router-link to="/wiki/2">2</router-link>
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

export default class Wiki extends Vue { // Vueクラスを継承
  /*
  * Defines Sidebar
  */
  private sidebarState = false; // サイドバー最小化の状態管理
  public minimizeSidebar(sidebarState: boolean){ // ← 引数で受け取る
    this.sidebarState = sidebarState;
  }
}
</script>

<style lang="scss">
.wiki {
  @include main();
  &.-max { // サイドバー最小化時
    padding-left: 60px;
  }

  &_inner {
    @include inner();
  }
}
</style>
