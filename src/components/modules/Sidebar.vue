<template>
  <div :class="minimize" class="sidebar">
    <div class="sidebar__brand">
      <div class="sidebar__brand-logo">
        <Logo />
      </div>
      <!-- <div @click="muni" class="sidebar__brand-button"> -->
      <div @click="sidebarMinimize = !sidebarMinimize" class="sidebar__brand-button">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="l-sidebar__inner">
      <div class="sidebar__unit">
        {{ greet }}
      </div>
      <div class="sidebar__unit">
        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import Logo from '@/components/svg/Logo.vue'; 

@Component({
  components: {
    Logo
  }
})
export default class Sidebar extends Vue {
  public sidebarMinimize = false; // サイドバー最小化の状態管理

  @Emit() // @Emitで新たなイベントを作成
  public munishi() {
    // this.$emit('muni_shi', this.sidebarMinimize);
    // return this.$emit('muni_shi', this.sidebarMinimize);
    return this.sidebarMinimize;
  }

  public get minimize() { // computedの定義
    return { '--minimize': this.sidebarMinimize }
  }
}
</script>

<style lang="scss">
.sidebar {
  background-color: $deepColor;
  width: 260px;
  transition: width .3s;
  &.--minimize { // サイドバー最小化時
    width: 60px;
    .sidebar__brand-logo {
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
.sidebar__brand-logo {
  > svg {
    display: block;
    width: 150px;
    fill: #fff;
  }
}
.sidebar__brand-button {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  padding: 9px;
  border: 1px solid $supportColor;
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

.l-sidebar__inner {
  padding: 30px;
  height: 100%;
}
.sidebar__unit {
  margin-bottom: 30px;
  color: #fff;
  &:last-child {
    margin-bottom: 0;
  }
}

.l-sidebar__unitName {
  @include enfont();
  font-size: 1.7rem;
  font-weight: 700;
  svg {
    width: 17px;
    padding-right: 5px;
  }
  path {
    fill: $accentColor;
  }
}
</style>
