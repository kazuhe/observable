<template>
  <div class="home">
    <Button />
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/modules/Button.vue';
import HelloWorld from '@/components/HelloWorld.vue'

@Component({ // VueがClassを認識するためのアノテーション
  components: {
    Button,
    HelloWorld
  },
})
export default class Home extends Vue { // Vueクラスを継承
  data () {
    return {

    }
  }
}
</script>
