<template>
  <div class="project">
    <div class="project_head">
      <div class="project_title">{{ greet }}Project</div>
      <div class="project_label">
        <div @click="openModal" class="project_label_inner">
          <div class="project_label_plus">
            <Plus />
          </div>
          Projectを追加
        </div>
        <Modal v-show="modal" @close="closeModal">
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
        </Modal>
      </div>
    </div>
    <div class="project_body">
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
import { Component, Prop, Vue } from 'vue-property-decorator';
import Modal from '@/components/modules/Modal.vue'
import Trash from '@/components/svg/Trash.vue';
import Plus from '@/components/svg/Plus.vue'; 
import axios from 'axios';
import flatpickr from "flatpickr";
require("flatpickr/dist/themes/dark.css");

@Component({
  components: {
    Modal,
    Trash,
    Plus
  }
})
export default class Project extends Vue {
  project_name = '';
  project_start = '';
  projects: string[] = [];
  modal = false;

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

  private openModal() {
    this.modal = true;
  }

  private closeModal() {
    this.modal = false;
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
.project_label {
  position: relative;
  &:hover {
    .project_label_plus {
      background-color: $thinColor;
    }
  }
}
.project_label_inner {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: $mainColor;
  }
}
.project_label_plus {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  margin-right: 5px;
  cursor: pointer;
  svg {
    display: block;
    width: 10px;
    fill: $subColor;
  }
  &:hover {
    background-color: $thinColor;
  }
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

// start - デートピッカー
.flatpickr-calendar {
  background: $deepColor;
}
.flatpickr-day.selected, .flatpickr-day.startRange, .flatpickr-day.endRange, .flatpickr-day.selected.inRange, .flatpickr-day.startRange.inRange, .flatpickr-day.endRange.inRange, .flatpickr-day.selected:focus, .flatpickr-day.startRange:focus, .flatpickr-day.endRange:focus, .flatpickr-day.selected:hover, .flatpickr-day.startRange:hover, .flatpickr-day.endRange:hover, .flatpickr-day.selected.prevMonthDay, .flatpickr-day.startRange.prevMonthDay, .flatpickr-day.endRange.prevMonthDay, .flatpickr-day.selected.nextMonthDay, .flatpickr-day.startRange.nextMonthDay, .flatpickr-day.endRange.nextMonthDay {
  background: $mainColor;
  border-color: $mainColor;
}
.flatpickr-months .flatpickr-prev-month:hover svg, .flatpickr-months .flatpickr-next-month:hover svg {
    fill: $mainColor;
}
// end - デートピッカー
</style>
