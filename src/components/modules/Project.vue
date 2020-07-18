<template>
  <div class="project">
    <div class="project_head">
      <div class="project_title"><Buffer />Project</div>
      <div class="project_label">
        <div @click="openModal" class="project_label_inner">
          <div class="project_label_plus">
            <Plus />
          </div>
        </div>
        <Modal v-show="modal" @close="closeModal">
          <ul class="project_addform_list">
            <li class="project_addform_item">
              <label for="project_name">プロジェクト名</label>
              <input id="project_name" type="text" v-model="project.name" />
            </li>
            <li class="project_addform_item">
              <label for="project_period">期間</label>
              <input
                id="project_period"
                type="text"
                v-model="project.period"
                class="project_addform_datepicker"
              />
            </li>
          </ul>
          <div class="project_addform_footer">
            <button class="project_addform_button" @click="addProject()">
              追加
            </button>
          </div>
        </Modal>
      </div>
    </div>
    <table class="project_table">
      <tr v-for="project in projects" :key="project.name">
        <td>{{ project.name }}</td>
        <td @click="removeProject(project.name)">
          <Trash />
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
// Vue API
import { Component, Mixins } from 'vue-property-decorator'

// Original components
import Modal from '@/components/modules/Modal.vue'
import Trash from '@/components/svg/Trash.vue'
import Plus from '@/components/svg/Plus.vue'
import Buffer from '@/components/svg/Buffer.vue'

// Mixins
import Firestore from '@/components/mixins/firestore'

// Flatpickr
import flatpickr from 'flatpickr'
require('flatpickr/dist/themes/dark.css')

// Dayjs
import dayjs from 'dayjs' // 日付を解析、検証、操作するためのライブラリ
import utc from 'dayjs/plugin/utc' // dayjsを日本仕様で扱うためのプラグイン
dayjs.extend(utc)

@Component({
  components: {
    Modal,
    Trash,
    Plus,
    Buffer,
  },
})
export default class Project extends Mixins(Firestore) {
  // モーダル
  modal = false
  private openModal() {
    this.modal = true
  }
  private closeModal() {
    this.modal = false
  }

  public created() {
    this.watchProjects()
  }

  public mounted() {
    // 日付け入力用データピッカー
    flatpickr('.project_addform_datepicker', {
      mode: 'range',
      dateFormat: 'Y-m-d',
    })
  }

  private destroyed() {
    // 強引だけどflatpickrをdestroy
    const fp = document.querySelectorAll('.flatpickr-calendar')
    document.body.removeChild(fp[0])
  }
}
</script>

<style lang="scss">
.project {
  &_head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
  }

  &_title {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.6rem;
    color: $thinColor;
    svg {
      display: block;
      margin-right: 10px;
      width: 15px;
      fill: $thinColor;
    }
  }

  &_label {
    position: relative;
    &_plus {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      background-color: darken($deepColor, 5%);
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
  }

  &_table {
    width: 100%;
    margin-top: 10px;
    padding: 0 30px;
    tr {
      height: 30px;
      color: $subColor;
      line-height: 1.4;
      svg {
        width: 12px;
        height: auto;
        fill: $subColor;
        cursor: pointer;
        &:hover {
          fill: $thinColor;
        }
      }
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
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background: $mainColor;
  }
}

.flatpickr-calendar {
  background: $deepColor;
}
.flatpickr-day.selected,
.flatpickr-day.startRange,
.flatpickr-day.endRange,
.flatpickr-day.selected.inRange,
.flatpickr-day.startRange.inRange,
.flatpickr-day.endRange.inRange,
.flatpickr-day.selected:focus,
.flatpickr-day.startRange:focus,
.flatpickr-day.endRange:focus,
.flatpickr-day.selected:hover,
.flatpickr-day.startRange:hover,
.flatpickr-day.endRange:hover,
.flatpickr-day.selected.prevMonthDay,
.flatpickr-day.startRange.prevMonthDay,
.flatpickr-day.endRange.prevMonthDay,
.flatpickr-day.selected.nextMonthDay,
.flatpickr-day.startRange.nextMonthDay,
.flatpickr-day.endRange.nextMonthDay {
  background: $mainColor;
  border-color: $mainColor;
}
.flatpickr-months .flatpickr-prev-month:hover svg,
.flatpickr-months .flatpickr-next-month:hover svg {
  fill: $mainColor;
}
</style>
