<template>
  <div class="">
    {{ greet }}
    名前<input v-model="name">
        <button @click="addUser">
          追加
        </button>
        <ul class="c-userList">
          <li v-for="(user, index) in users" :key="user.id" class="c-userList___item">
            <a href="">{{ user.name }}</a>
            <button @click="removeUser(index)">
              削除
            </button>
          </li>
        </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class Project extends Vue {
  @Prop()
  public greet?: string
}
</script>

<style lang="scss">
</style>
