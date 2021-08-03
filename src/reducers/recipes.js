// import data from 'src/data';

import { SAVE_RECIPES } from 'src/actions/recipes';

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES: {
      return {
        ...state,
        list: action.recipe,
      };
    }
    default:
      return state;
  }
};

export default reducer;
