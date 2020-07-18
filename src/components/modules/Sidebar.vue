<template>
  <div class="sidebar">
    <div class="sidebar__brand">
      <div class="sidebar__brand_logo">
        <Logo />
      </div>
      <div @click="minimizeSidebar" class="sidebar__brand_button">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="sidebar_unit">
      <Project />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator'
import Project from '@/components/modules/Project.vue'
import Logo from '@/components/svg/Logo.vue'

@Component({
  components: {
    Project,
    Logo,
  },
})
export default class Sidebar extends Vue {
  private sidebarState = false // サイドバー最小化の状態管理

  // clickをトリガーに「sidebarState」の状態を親コンポーネントに渡す
  @Emit()
  public click(sidebarState: boolean) {
    return sidebarState
  }
  public minimizeSidebar() {
    this.sidebarState = !this.sidebarState
    this.click(this.sidebarState)
  }
}
</script>

<style lang="scss">
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: $deepColor;
  min-width: 260px;
  width: 260px;
  transition: all 0.3s;
  &.-mini {
    // サイドバー最小化時
    min-width: 0;
    width: 0;
    .sidebar__brand_logo,
    .sidebar_unit {
      display: none;
    }
  }
}

.sidebar__brand {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 15px;
}
.sidebar__brand_logo {
  > svg {
    display: block;
    width: 150px;
    fill: #fff;
  }
}
.sidebar__brand_button {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  padding: 9px;
  border: 1px solid $thinColor;
  background-color: #fff;
  border-radius: 50px;
  cursor: pointer;
  position: absolute;
  right: -15px;
  cursor: pointer;
  & span {
    width: 100%;
    height: 1px;
    background-color: $deepColor;
  }
}
.sidebar_unit {
  margin-top: 30px;
}
</style>
