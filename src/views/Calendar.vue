<template>
  <div class="calendar">
    <h1>calendar page</h1>
    <div class="unit">
      <Timeline />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Timeline from "@/components/modules/Timeline.vue";

@Component({
  components: {
    Timeline,
  },
})
export default class Task extends Vue {
}
</script>
