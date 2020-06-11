<template>
  <div class="project">
    <div class="project_head">
      <div class="project_title">{{ greet }}Project</div>
    </div>
    <div class="project_body">
      <div class="project_addform">
        <ul class="project_addform_list">
          <li class="project_addform_item">
            <label for="project_name">プロジェクト名</label>
            <input id="project_name" type="text" v-model="project_name">
          </li>
          <li class="project_addform_item">
            <label for="project_start">開始日</label>
            <input id="project_start" type="text" v-model="project_start" class="project_addform_datepicker">
          </li>
        </ul>
        <div class="project_addform_footer">
          <button class="project_addform_button" @click="addProject('muni')">追加</button>
        </div>
      </div>
      <ul class="project_list">
        <li v-for="(project, index) in projects" :key="project.name" class="project_item">
          <a class="project_link" href="#">{{ project.fields.project.stringValue }}</a>
          <div @click="removeProject(index)" class="project_trash">
            <Trash />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import Trash from '@/components/svg/Trash.vue'; 
import axios from 'axios';
import flatpickr from "flatpickr";
require("flatpickr/dist/themes/dark.css");

@Component({
  components: {
    Trash
  }
})
export default class Project extends Vue {
  project_name = '';
  project_start = '';
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

  public mounted() { // 日付け入力用データピッカー
    flatpickr(".project_addform_datepicker", {
      mode: "range",
      dateFormat: "Y-m-d",
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
.project_head {
  @include unit_head();
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.project_title {
  @include unit_title();
}
.project_body {
  @include unit_body();
}
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
.project_addform {
  width: 300px;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
  padding: 15px;
  border-radius: 5px;
}
.project_addform_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  input {
    padding: 5px 10px;
    font-size: 1rem;
    color: $subColor;
    border: 1px solid $borderColor;
    border-radius: 5px;
    &:focus {
      border: 1px solid $subColor;
      outline: 0;
    }
  }
}
.project_addform_footer {
  text-align: right;
}
.project_addform_button {
  padding: 3px 15px;
  font-size: 1.2rem;
  color: #fff;
  border: none;
  background: $deepColor;
  border-radius: 5px;
  transition: all .3s ease;
  cursor: pointer;
  &:hover {
    background: $mainColor;
  }
}
</style>
