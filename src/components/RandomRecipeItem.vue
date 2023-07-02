<script setup>
import { onMounted, ref } from 'vue'
import { getData } from '../api/index'
import { convertArray } from '../utils/helpsers'
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

const getMeal = async () => {
  try {
    const { data } = await getData('https://www.themealdb.com/api/json/v1/1/random.php')
    randomMeal.value= data.value?.meals[0]

    if (Object.values(randomMeal.value)) {
      mealName.value = randomMeal.value.strMeal
      maelImage.value = randomMeal.value.strMealThumb
      mealVideo.value = randomMeal.value.strYoutube
      instructions.value = randomMeal.value.strInstructions
      ingredients.value = convertArray(data.value?.meals[0])
    }
  } catch (error) {
    console.error(error)
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