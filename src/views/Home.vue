<template>
  <div class="home">
    <h1>{{ this.$store.getters.getCounter }}</h1>
    <button @click.prevent="onPress">press me</button>
    <button @click.prevent="onPress2">press me2</button>
    <br>
    <br>
    <br>
    <br>
    <button @click.prevent="addUser">press me</button>
    <button @click.prevent="deleteUser">press me2</button>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import store from '../store';

@Component({
  components: {},
  mounted: store.dispatch('get_all')=
})

export default class Home extends Vue {

  onPress() {
    store.dispatch('increment')
  }

  onPress2() {
    store.dispatch('decrease')
  }


  addUser() {
    store.dispatch('add')
  }

  deleteUser() {
    store.dispatch('delete')
  }
}
</script>
