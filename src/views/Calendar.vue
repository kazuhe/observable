<template>
  <div class="calendar">
    <h1>This is an about page</h1>
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
