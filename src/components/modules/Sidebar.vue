<template>
  <div :class="minimize" class="sidebar">
    <div class="sidebar__brand">
      <div class="sidebar__brand-logo">
        <Logo />
      </div>
      <div @click="sidebarMinimize = !sidebarMinimize" class="sidebar__brand-button">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="l-sidebar__inner">
      <div class="l-sidebar__unit">
        <p>sidebar</p>
      </div>
      <div class="l-sidebar__unit">
        <p class="l-sidebar__unitName">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" /></svg>
          Users
        </p>
       <!--  名前<input v-model="name">
        <button @click="addUser">
          追加
        </button> -->
        <!-- <ul class="c-userList">
          <li v-for="(user, index) in users" :key="user.id" class="c-userList___item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" /></svg>
            <a href="">{{ user.name }}</a>
            <button @click="removeUser(index)">
              削除
            </button>
          </li>
        </ul> -->
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Logo from '@/components/svg/Logo.vue';

@Component({
  components: {
    Logo
  }
})
export default class Sidebar extends Vue {
  sidebarMinimize = false // サイドバー最小化の状態管理

  get minimize() { // computedの定義
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
    width: 100px;
    .sidebar__brand-logo {
      display: none;
    }
  }
}
.sidebar__brand {
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
  background-color: lighten($deepColor, 5%);
  border-radius: 50px;
  cursor: pointer;
  & span {
    width: 100%;
    height: 1px;
    background-color: #fff
  }
}

.l-sidebar__inner {
  padding: 30px;
  height: 100%;
}
.l-sidebar__unit {
  margin-bottom: 30px;
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
