/* eslint-disable linebreak-style */
export const FETCH_DATA = 'FETCH_DATA';
export const SAVE_RECIPES = 'SAVE_RECIPES';

export const fetchData = () => ({
  type: 'FETCH_DATA',
});

export const saveRecipes = (recipe) => ({
  type: 'SAVE_RECIPES',
  recipe,
});