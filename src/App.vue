<template>
  <h1 class="title">{{ name  }}</h1>
  <el-button type="primary">Primary</el-button>
  <router-link to="/home">Go to Home</router-link>
  <router-link to="/about">Go to About</router-link>
  <router-view></router-view>
</template>

<script setup>
import {ref} from 'vue'
import { ElButton } from 'element-plus'
const name = ref('aaa')
</script>

<style lang="scss" scoped>
.title{
  color: pink;
}
</style>