<template>
  <div>
    {{ greet }}
    <label for="project_name">ニックネーム:</label>
    <input id="project_name" type="text" v-model="project_name">
    <button @click="addProject('muni')"> 追加！</button>
    <ul class="project_list">
      <li v-for="(project, index) in projects" :key="project.name" class="project_item">
        <a class="project_link" href="#">{{ project.fields.project.stringValue }}</a>
        <div @click="removeProject(index)" class="project_trash">
          <Trash />
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import axios from 'axios';
import Trash from '@/components/svg/Trash.vue'; 

@Component({
  components: {
    Trash
  }
})
export default class Project extends Vue {
  project_name = 'project name';
  projects: string[] = [];

  // @Watch('projects')
  // public update () {
  //   axios.get('/projects')
  //   .then(response => {
  //     this.projects = response.data.documents;
  //   });
  // }

  public created() { // 非同期処理の中ではreturnは書けないので更新はwatchで監視
    axios.get('/projects')
    .then(response => {
      this.projects = response.data.documents;
      console.log(response.data.documents);
    });
  }

  private addProject () {
    // this.projects.push(projects);
    axios.post('/projects',
      {
        fields: { // Firebase Cloud Firestore 固有のdata指定方法
          project: {
            stringValue: this.project_name
          }
        }
      }
    )
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
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
  + li {
    margin-top: 5px;
  }
}
.project_link {
  &:hover {
    text-decoration: underline;
    color: $mainColor;
  }
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
