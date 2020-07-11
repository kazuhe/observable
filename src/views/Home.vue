<template>
  <div :class="{ '-max': sidebarState }" class="home">
    <Sidebar :class="{ '-mini': sidebarState }" @click="minimizeSidebar" />
    <Header />
    <div class="home_inner">
      <div class="unit">
        <Timeline />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/modules/Header.vue'
import Sidebar from '@/components/modules/Sidebar.vue'
import Timeline from '@/components/modules/Timeline.vue'

@Component({
  // VueがClassを認識するためのアノテーション
  components: {
    Header,
    Sidebar,
    Timeline,
  },
})
export default class Home extends Vue {
  // Vueクラスを継承
  /*
   * Defines Sidebar
   */
  private sidebarState = false // サイドバー最小化の状態管理
  public minimizeSidebar(sidebarState: boolean) {
    // ← 引数で受け取る
    this.sidebarState = sidebarState
  }
}
</script>

<style lang="scss">
.home {
  @include main();
  &.-max {
    // サイドバー最小化時
    padding-left: 0;
  }

  &_inner {
    @include inner();
  }
}
</style>
