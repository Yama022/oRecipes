/* eslint-disable linebreak-style */
import { FETCH_DATA, saveRecipes } from 'src/actions/recipes';
import axios from 'axios';

const recipes = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DATA: {
      const fetchRecipes = async () => {
        try {
          const response = await axios.get('http://localhost:3001/recipes');

          const recipesFetched = saveRecipes(response.data);
          store.dispatch(recipesFetched);
        }
        catch (err) {
          console.log(err);
        }
      };
      fetchRecipes();
    };

      break;

    default:
      next(action);
  }
};

export default recipes;
