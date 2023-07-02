<script setup>
import { onMounted, ref } from 'vue'
import { getData } from '../api/index'

defineProps({
  msg: {
    type: String,
    required: true
  }
})

const menu = ref([])

onMounted(async () => {
  const { data } = await getData('https://www.themealdb.com/api/json/v1/1/categories.php')
  menu.value= data.valueы
})
</script>

<template>
  <div class="header">
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>

<style lang="scss" scoped>
.header {
  margin-bottom: 20px;
  text-align: center;

  & h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
  }
}
</style>
