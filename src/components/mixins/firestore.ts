// Vue API
import { Component, Vue } from 'vue-property-decorator'

// Firebase
import firebase from 'firebase'
import 'firebase/firestore'

// Dayjs
import dayjs from 'dayjs' // 日付を解析、検証、操作するためのライブラリ
import utc from 'dayjs/plugin/utc' // dayjsを日本仕様で扱うためのプラグイン
dayjs.extend(utc)

@Component
export default class Firestore extends Vue {
  projects: any = []
  project = {
    name: '',
    start: 0,
    end: 0,
    period: '',
  }
  db = firebase.firestore().collection('projects')

  // Cloud Firestoreからリアルタイムにデータを取得する
  public watchProjects(): void {
    this.db.onSnapshot((querySnapshot) => {
      const ary: any = []
      querySnapshot.forEach((doc) => {
        ary.push(doc.data())
      })
      this.projects = ary
    })
  }

  // Cloud Firestoreにデータを追加する
  public addProject() {
    const projectPeriod = this.project.period.split(' ')
    const period = dayjs(projectPeriod[2]).diff(projectPeriod[0], 'd')
    this.db
      .doc(this.project.name)
      .set({
        name: this.project.name,
        start: projectPeriod[0],
        end: projectPeriod[2],
        period: period + 1,
      })
      .then(() => {
        this.watchProjects()
      })
      .catch((error) => {
        console.error('エラーメッセージ: ' + error)
      })
  }

  // Cloud Firestoreからデータを削除する
  public removeProject(name: string): void {
    this.db
      .doc(name)
      .delete()
      .then(() => {
        this.watchProjects()
      })
      .catch((error) => {
        console.error('エラーメッセージ: ', error)
      })
  }
}
