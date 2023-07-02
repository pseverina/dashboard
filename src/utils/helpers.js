export const convertArray = (meal) => {
  let recipe = []

  for (let item = 1; item <= 15; item++) {
    const strIngredient = `strIngredient${item}`
    const strMeasure = `strMeasure${item}`

    if (meal[strIngredient] === '') {
      break;
    }

    const ingredient = `${meal[strIngredient]} ${meal[strMeasure]}`
    recipe.push(ingredient);
  }

  return recipe
}

export const isEmptyObject = (item) => {
  return Object.entries(item).length === 0
}