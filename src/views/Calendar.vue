<template>
  <div :class="{'-max': sidebarState}" class="calendar">
    <Sidebar :class="{'-mini': sidebarState}" @click="minimizeSidebar" />
    <Header />
    <div class="calendar_inner">
      <div class="unit">
        <Timeline />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/modules/Header.vue';
import Sidebar from '@/components/modules/Sidebar.vue';
import Timeline from "@/components/modules/Timeline.vue";

@Component({
  components: {
    Header,
    Sidebar,
    Timeline
  },
})

export default class Calendar extends Vue {
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
.calendar {
  @include main();
  &.-max { // サイドバー最小化時
    padding-left: 60px;
  }

  &_inner {
    @include inner();
  }
}
</style>
