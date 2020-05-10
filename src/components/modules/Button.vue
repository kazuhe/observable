<template>
  <button>Button!</button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component // VueがClassを認識するためのアノテーション
export default class Button extends Vue { // Vueクラスを継承

}
</script>