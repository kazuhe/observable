<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ // VueがClassを認識するためのアノテーション
  components: {

  },
})
export default class Home extends Vue { // Vueクラスを継承
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
.home {
  padding: 0 30px;
}
</style>
