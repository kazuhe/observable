<template>
  <div class="modal">
    <div @click="$emit('close')" class="modal_overlay">
    </div>
    <div class="modal_inner">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Modal extends Vue {}
</script>

<style lang="scss">
.modal {
  position: relative;
}
.modal_overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background: rgba(0, 0, 0, 0.5);  
}
.modal_inner {
  position: absolute;
  top: 0;
  right: 0;
  background: #fff;
  width: 300px;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
  padding: 15px;
  border-radius: 5px;
  z-index: 2;
}
</style>
