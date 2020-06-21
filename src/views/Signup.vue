<template>
  <div class="signup">
    <h2>Sign up</h2>
    <p>新規アカウント登録</p>
    <input type="text" placeholder="Username" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button>Register</button>
    <p>Do you have an account? 
      <router-link to="/signin">sign in now!!</router-link>
    </p>
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

export default class Signup extends Vue { // Vueクラスを継承
  /*
  * Defines Sidebar
  */
  username = '';
  password = '';
}
</script>

<style lang="scss">

</style>