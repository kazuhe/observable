<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="header__logo">
        <!-- <logo /> -->
      </div>
      <div class="header__a">
        h
      </div>
      <div>
       <!--  <router-link to="/">HOME</router-link>
        <router-link to="/test">TEST</router-link> -->
      </div>
    </div>
  </header>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {

}
</script>

<style lang="scss">
.header {
  background: #fff;
  border-bottom: 1px solid $supportColor;
  padding: 0 30px;
}
.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
}
.header__logo {
  & svg {
    display: block;
    width: 150px;
    fill: $mainColor;
  }
}
.header__menu {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  padding: 9px;
  background-color: $accentColor;
  border-radius: 50px;
  cursor: pointer;
  & span {
    width: 100%;
    height: 1px;
    background-color: #fff
  }
}
</style>
