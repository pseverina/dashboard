<script setup>
import { ref } from 'vue'
import { convertArray, isEmptyObject } from '../utils/helpers'
import SearchBar from '../components/SearchBar.vue'
import RecipeItem from '../components/RecipeItem.vue'

const mealName = ref('')
const maelImage = ref('')
const mealVideo = ref('')
const ingredients = ref([])
const instructions = ref('')

const onSearchResults = (meal) => {
   if (!isEmptyObject(meal)) {
    mealName.value = meal.strMeal
    maelImage.value = meal.strMealThumb
    mealVideo.value = meal.strYoutube
    instructions.value = meal.strInstructions
    ingredients.value = convertArray(meal)
  }
}

</script>


<template>
  <div class="lookup-recipe">
    <h3 class="lookup-recipe__header">
      Type the first letter of the meal and find all possible choices!
    </h3>
    <SearchBar 
      @searchResults="onSearchResults" 
    />

    <RecipeItem
      v-if="mealName.length"
      :mealName="mealName"
      :maelImage="maelImage"
      :mealVideo="mealVideo"
      :instructions="instructions"
      :ingredients="ingredients"
      class="lookup-recipe__item"
    />
  </div>
</template>

<style lang="scss" scoped>

.lookup-recipe {
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    align-self: center;
    text-align: center;
    margin-bottom: 15px;
    width: 300px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-self: center;
      width: 300px;
  }
}
</style>
