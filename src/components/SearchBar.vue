<script setup>
import { ref } from 'vue'
import { getData } from '../api/index'
import debounce from 'lodash.debounce'

const emit = defineEmits(
  ['searchResults']
)

const search = ref('')

const searchForMeal = debounce(async () => {
    try {
    const { data } = await getData(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search.value[0]}`)
    const meal =  data.value?.meals[0]
    emit('searchResults', meal)
  } catch (error) {
    console.error(error)
  }
}, 500)
</script>

<template>
  <div class="search">
    <input 
      type="text" 
      v-model="search" 
      placeholder="Type name of the meal here.." 
      class="search__bar"
      @input="searchForMeal"
    />
  </div>
</template>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: center;

  &__bar {
    padding: 8px 12px;
    width: 300px;
    border-radius: 4px;
  }
}

</style>