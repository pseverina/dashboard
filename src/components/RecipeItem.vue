<script setup>
defineProps({
  mealName: {
    type: String,
    required: true
  },
  ingredients: {
    type: Array,
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  maelImage: {
    type: String,
    required: true
  },
  mealVideo: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="recipe-item">
    <h1 class="recipe-item__name">
      {{ mealName }}
    </h1>
    <div class="recipe-item__description">
        <img 
          :src="maelImage" 
          alt="image" 
          class="recipe-item__image"
        />

        <div 
          v-for="(item, index) in ingredients" 
          :key="index"
          class="recipe-item__ingredients"
        >
          <span v-if="item.length">
            {{ item }}
          </span>
        </div> 


      <video class="recipe-item__video" width="320" height="240" controls>
        <source :src="mealVideo">
          Your browser does not support the video tag.
      </video>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.recipe-item {
  max-width: 1200px;

  &__name {
    position: relative;
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
  }

  &__image {
    width: 300px;
    margin-bottom: 10px;
  }

  &__description {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: left;
  } 

  &__ingredients {
    display: flex;
    align-self: baseline;
  }

  &__video {
    margin-top: 15px;
  }
}
</style>