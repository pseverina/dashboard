export const convertArray = (meal) => {
  let recipe = []

  for (let item = 1; item <= 15; item++) {
    if (meal[`strIngredient${item}`] === '') {
      break;
    }

    const ingredient = `${meal[`strIngredient${item}`]} ${meal[`strMeasure${item}`]}`
    recipe.push(ingredient);
  }

  return recipe
}