<script setup>
import { onMounted, ref, toValue } from 'vue'
import { useRequest } from '../api/index'
import { convertArray, isEmptyObject } from '../utils/helpers'
import RecipeItem from './RecipeItem.vue'

const randomMeal = ref([])
const mealName = ref('')
const maelImage = ref('')
const mealVideo = ref('')
const ingredients = ref([])
const instructions = ref('')

onMounted(() => {
  getMeal()
})

const getMeal = async() => {
  const { data } = await useRequest('https://www.themealdb.com/api/json/v1/1/random.php')
  randomMeal.value = toValue(data.value?.meals[0])

  if (!isEmptyObject(randomMeal.value)) {
    mealName.value = randomMeal.value.strMeal
    maelImage.value = randomMeal.value.strMealThumb
    mealVideo.value = randomMeal.value.strYoutube
    instructions.value = randomMeal.value.strInstructions
    ingredients.value = convertArray(data.value?.meals[0])
  }
}

</script>

<template>
  <RecipeItem
    v-if="randomMeal" 
    class="random-meal"
    :mealName="mealName"
    :maelImage="maelImage"
    :mealVideo="mealVideo"
    :instructions="instructions"
    :ingredients="ingredients"
  />
</template>

<style lang="scss" scoped>
.random-meal {
  max-width: 1200px;
}
</style>