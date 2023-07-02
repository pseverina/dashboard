<script setup>
import { ref, toValue } from 'vue'
import { useRequest } from '../api/index'
import debounce from 'lodash.debounce'

const emit = defineEmits(
  ['searchResults']
)

const search = ref('')

const searchForMeal = debounce(async() => {
  const { data } = await useRequest(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search.value[0]}`)
  const meal = toValue(data.value?.meals[0])
  emit('searchResults', meal)
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