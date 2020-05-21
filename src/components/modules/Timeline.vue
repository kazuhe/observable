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
      aaa
      <div>
        <table>
          <thead>
            <tr>
              <td>
                <table>
                  <tr>
                    <td>{{ setDate }}</td>
                  </tr>
                </table>
              </td>
            </tr>
          </thead>
        </table>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import moment from 'moment'; // 日付を解析、検証、操作するためのライブラリ
import Arrow from '@/components/svg/Arrow.vue';

@Component({
  components: {
    Arrow,

  }
})
export default class Timeline extends Vue {

  generate = moment(); // 現在日時のMomentオブジェクトを生成
  currentMonth: moment.Moment | string = '' // 計算基準となるカレント月
  // dates: string | number [] = [];
  dates: {
    date: string;
    dateNumber: number;
    weekDay: string;
    } [] = [];

  // public created() {
  //   this.currentMonth = moment(this.generate).format('YYYY年MM月')
  // }

  // @Watch('generate')
  // public labelUpdate() {
  //   // 選択している月の変更時の処理、画面表示時も動きます
  //   this.currentMonth = moment(this.generate).format('YYYY年MM月') // 月ラベルを更新
  // }

  public get getMonth(): string {
    return moment(this.generate).format('YYYY年MM月');
  }

  public get setDate() {
    for (let i = 0; i < moment(this.generate).daysInMonth(); i++) { // daysInMonth: 月の日数を取得
      this.dates[i] = {
        date: moment(this.generate).startOf('month').add(i, 'day').format('YYYY-MM-DD'),
        dateNumber: i + 1,
        weekDay: moment(this.generate).startOf('month').add(i, 'day').format('ddd')
      }
    }
    return this.dates
  }

  public prevMonth(): void {
    this.generate = moment(this.generate).subtract(1, 'months');
  }
  public nextMonth(): void {
    this.generate = moment(this.generate).add(1, 'months');
  }
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
</style>