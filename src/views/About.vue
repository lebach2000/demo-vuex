<template>
  <div>
    {{JSON.stringify(this.$store.getters)}}
<!--    <ul>-->
<!--      <li v-for="item in this.$store.getters.getUser" :key="item.id">-->
<!--        {{ item.id }} - {{ item.name }}-->
<!--      </li>-->
<!--    </ul>-->
  </div>
</template>
