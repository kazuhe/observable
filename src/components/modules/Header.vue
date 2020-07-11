<template>
  <header class="header">
    <div class="header__inner">
      <div>
        <button @click="changeUserState">{{ userMessage }}</button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import firebase from 'firebase'

@Component
export default class Header extends Vue {
  /*
   * Defines Authentication
   */
  private userMessage = ''
  public created() {
    const userState = firebase.auth().currentUser
    if (userState) {
      this.userMessage = 'Sign Out'
    } else {
      this.userMessage = 'Sign In'
    }
  }
  private changeUserState() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.$router.push('/signin')
      })
  }
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
