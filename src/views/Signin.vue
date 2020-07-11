<template>
  <div class="signin">
    <div class="signin_inner">
      <h2>Sign in</h2>
      <p>おかえりなさい</p>
      <div class="signin_input">
        <input type="text" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Password" v-model="password" />
      </div>
      <button @click="signIn">Signin</button>
      <p class="signin_annotation">
        アカウントを持っていない方は
        <router-link to="/signup">sign up now!!</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import firebase from 'firebase'

@Component({
  components: {
    // Unit
  },
})
export default class Signin extends Vue {
  /*
   * Defines Sign In
   */
  private email = ''
  private password = ''

  private signIn(): void {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        this.$router.push('/')
      })
      .catch((error) => {
        alert(error.message)
      })
  }
}
</script>

<style lang="scss">
.signin {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: $deepColor;

  &_inner {
    width: 700px;
    padding: 30px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
      0 1px 3px 1px rgba(60, 64, 67, 0.15);
    text-align: center;
  }

  &_input {
    margin-top: 30px;
  }

  &_annotation {
    margin-top: 30px;
  }

  a {
    color: $mainColor;
  }

  input {
    display: block;
    margin: 15px auto 0;
    padding: 5px 10px;
    font-size: 1.4rem;
    color: $subColor;
    border: 1px solid $borderColor;
    border-radius: 5px;
    &:focus {
      border: 1px solid $subColor;
      outline: 0;
    }
  }

  button {
    padding: 5px 15px;
    font-size: 1.4rem;
    color: #fff;
    border: none;
    background: $deepColor;
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
    margin-top: 30px;
    &:hover {
      background: $mainColor;
    }
  }
}
</style>
