<template>
  <div class="">
    {{ greet }}
    名前
    
      <!-- <input v-model="name">追加 -->
    <button @click="addProject('muni')">
    </button>
    <ul class="project_list">
      <li v-for="(project, index) in projects" :key="project" class="project_item">
        <a href="#">{{ project }}</a>
        <div @click="removeProject(index)" class="project_trash">
          <Trash />
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Trash from '@/components/svg/Trash.vue'; 

@Component({
  components: {
    Trash
  }
})
export default class Project extends Vue {
  projects: string[] = ['ムニっと商店', 'モチっとホテル', 'ポヨっと食堂'];

  private addProject (name: string) {
    this.projects.push(name);
  }

  private removeProject (index: number): void {
    this.projects.splice(index, 1);
  }

  @Prop()
  public greet?: string
}
</script>

<style lang="scss">
.project_item {
    display: flex;
    align-items: center;
}
.project_trash {
  > svg {
    width: 10px;
    height: auto;
    fill: $subColor;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
      fill: $mainColor;
    }
  }
}
</style>
