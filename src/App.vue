<template>
  <h1 class="title">{{ name  }}</h1>
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