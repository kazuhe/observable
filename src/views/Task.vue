<template>
  <div :class="{'-max': sidebarState}" class="task">
    <Sidebar :class="{'-mini': sidebarState}" @click="minimizeSidebar" />
    <Header />
    <div class="task_inner">
      <div class="unit">
        <Project greet="Hello!" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/modules/Header.vue';
import Sidebar from '@/components/modules/Sidebar.vue';
import Project from '@/components/modules/Project.vue'; 

@Component({
  components: {
    Header,
    Sidebar,
    Project
  },
})
export default class Task extends Vue {
  /*
  * Defines Sidebar
  */
  private sidebarState = false;
  public minimizeSidebar(sidebarState: boolean){
    this.sidebarState = sidebarState;
  }
}
</script>

<style lang="scss">
.task {
  @include main();
  &.-max { // サイドバー最小化時
    padding-left: 60px;
  }

  &_inner {
    @include inner();
  }
}
</style>
