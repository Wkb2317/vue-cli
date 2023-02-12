<template>
  <h1 class="title">{{ name  }}</h1>
  <router-link to="/home">Go to Home</router-link>
  <router-link to="/about">Go to About</router-link>
  <router-view></router-view>
</template>

<script setup>
import {ref} from 'vue'

const name = ref('app')
</script>

<style lang="scss" scoped>
.title{
  color: pink;
}
</style>