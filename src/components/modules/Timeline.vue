<template>
  <div class="timeline">
    <div class="timeline_head">
      <div class="timeline_title">Timeline</div>
      <div class="timeline_label">
        <div class="timeline_prev" @click="prevMonth()">
          <Arrow />
        </div>
        <div class="timeline_date">
          {{ getMonth }}
        </div>
        <div class="timeline_next" @click="nextMonth()">
          <Arrow />
        </div>
      </div>
    </div>
    <div class="timeline_body">
      <div class="timeline_wrap">
        <table class="timeline_canvas">
          <tr class="timeline_canvas_head">
            <th class="timeline_canvas_name">Project name</th>
            <td v-for="date in dates" :key="date.id" class="timeline_canvas_date">
              <div>
                {{ date.weekDay }}
              </div>
              <div>
                {{ date.id }}
              </div>
            </td>
          </tr>
          <tr v-for="project in projects" :key="project.name">
            <th colspan="1" class="timeline_canvas_name">
              {{ project.fields.project.stringValue }}
            </th>
            <td v-for="date in dates" :key="date.id" class="timeline_canvas_field">

              <!-- Start 案件期間 -->
              <div
              v-if="project.fields.start.stringValue === date.date"
              class="timeline_canvas_period"
              :style="{ width: project.fields.period.integerValue * 75 + 'px'} "
              >
              </div>
              <!-- End 案件期間 -->

              <!-- Start コメント条件分岐 -->
              <div v-if="project.fields.comment" class="timeline_canvas_comment">
                <div v-if="commentCheck(project, date.date)">
                  {{ commentCheck(project, date.date) }}
                </div>
              </div>
              <!-- End コメント条件分岐 -->

            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import dayjs from 'dayjs'; // 日付を解析、検証、操作するためのライブラリ
import utc from "dayjs/plugin/utc"; // dayjsを日本仕様で扱うためのプラグイン
dayjs.extend(utc);
import axios from 'axios';

import Arrow from '@/components/svg/Arrow.vue';

@Component({
  components: {
    Arrow,
  }
})
export default class Timeline extends Vue {

  generate: dayjs.Dayjs | string = dayjs().locale('ja'); // 現在日時のMomentオブジェクトを生成
  dates: { id: number; date: string; weekDay: string } [] = [];
  projects: string[] = [];

  @Watch('generate', { immediate: true }) // immediate: コンポーネント初期化直後に1度実行
  public reloadDates(): void {
    this.dates = []; // 初期化
    for (let i = 0; i < dayjs(this.generate).daysInMonth(); i++) { // daysInMonth: 月の日数を取得
      this.dates[i] = {
        id: i + 1, // id兼日にち
        date: dayjs(this.generate).startOf('month').add(i, 'day').format('YYYY-MM-DD'),
        weekDay: dayjs(this.generate).startOf('month').add(i, 'day').format('ddd')
      }
    }
  }

  public created() { // 非同期処理の中ではreturnは書けないので更新はwatchで監視
    axios.get('/projects')
    .then(response => {
      this.projects = response.data.documents;
    });
  }

  // computed
  public get getMonth(): string {
    return dayjs(this.generate).format('YYYY年MM月');
  }

  // methods
  public prevMonth(): void {
    this.generate = dayjs(this.generate).subtract(1, 'month');
  }
  public nextMonth(): void {
    this.generate = dayjs(this.generate).add(1, 'month');
  }

  public commentCheck(value: any, date: string) {
    const comentDate = Object.keys(value.fields.comment.mapValue.fields);
    if (comentDate[0] === date) {
      return value.fields.comment.mapValue.fields[date].stringValue;
    }
    return false;
  }
  // public JudgmentPeriod(value: any): boolean { // カレント月に存在するか判定し表示させる
  //   const ary: string[] = [];
  //   console.log(value);
  //   for (const v of this.dates) {
  //     ary.push(v.date);
  //   }
  //   console.log(ary);
  //   if (ary.indexOf(value.fields.start.stringValue)) {
  //     const id = value.fields.id.stringValue // IDを取得
  //     const start: string = value.fields.start.stringValue // 開始日を取得
  //     const startInt: number = parseInt(start.substring(8, 10)) // 型を数字に変更
  //     const end: string = value.fields.end.stringValue // 終了日を取得
  //     const endInt: number = parseInt(end.substring(8, 10)) // 型を数字に変更

  //     // const widthPeriod: number = endInt - startInt * 75

  //     console.log(value.fields.start.stringValue);
  //     console.log(startInt * 75);
  //     this.eventStyle.left = startInt * 75 + 'px';
  //     this.eventStyle.width = (endInt - startInt) * 75 + 'px';
    
  //     return true
  //   }
  //   return false
  // }
  // public JudgmentPeriod(value: string): boolean { // カレント月に存在するか判定し表示させる
  //   for (const v of this.dates) {
  //     if (v.date === value) {
  //       console.log(v);
  //       return true
  //     }
  //   }
  //   return false
  // }
}
</script>

<style lang="scss">
.timeline_head {
  @include unit_head();
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.timeline_title {
  @include unit_title();
}
.timeline_label {
  display: flex;
  align-items: center;
  svg {
    display: block;
    width: 7px;
    fill: $subColor;
  }
}
.timeline_prev,
.timeline_next {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: $thinColor;
  }
}
.timeline_prev {
  transform: rotate(180deg);
}
.timeline_date {
  padding: 0 5px;
  font-size: 1.4rem;
  font-weight: 600;
  transform: translateY(1px);
}
.timeline_body {
  @include unit_body();
}
.timeline_wrap {
  overflow-x: auto;
}

// start - タイムライン描画
.timeline_canvas {
  position: relative;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-top: 1px solid $borderColor;
  td {
    border-right: 1px dotted $borderColor;
    border-bottom: 1px solid #d1d7e0;
    &:last-child {
      border-right: 1px solid $borderColor;
    }
  }
  tr {
    border-bottom: 1px solid $borderColor;
  }
  .timeline_canvas_head {
    border-bottom: 1px solid $borderColor;
    .timeline_canvas_name {
      color: $subColor;
      font-size: 1.2rem;
      text-align: center;
    }
  }
}
.timeline_canvas_name {
  position: sticky;
  left: 0;
  height: 45px;
  min-width: 200px;
  white-space: nowrap;
  background: #fff;
  padding: 0 15px;
  border-left: 1px solid $borderColor;
  border-bottom: 1px solid $borderColor;
  border-right: 1px solid $borderColor;
  z-index: 1;
  font-size: 1.3rem;
  text-align: left;
}
.timeline_canvas_date {
  min-width: 75px;
  text-align: center;
}
.timeline_canvas_field {
  position: relative;
}
.timeline_canvas_period {
  position: absolute;
  top: 3px;
  background: $mainColor;
  border-radius: 7px;
  height: 7px;
}
.timeline_canvas_comment {
  padding: 5px;
  font-size: 1.2rem;
  font-style: italic;
}
// end - タイムライン描画
</style>