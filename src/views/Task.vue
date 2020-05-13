<template>
  <div class="home">
    <Button />
    <Project greet="Hello!" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/modules/Button.vue';
import Project from '@/components/modules/Project.vue'; 

@Component({ // VueがClassを認識するためのアノテーション
  components: {
    Button,
    Project
  },
})
export default class Task extends Vue { // Vueクラスを継承
  data () {
    return {

    }
  }
}
</script>
