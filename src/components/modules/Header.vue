<template>
  <header class="header">
    <div class="header__inner">
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
  box-shadow: 0px 0px 40px 0px rgba($deepColor, 0.1);
  padding: 0 30px;
}
.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}
</style>
