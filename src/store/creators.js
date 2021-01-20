import * as actionTypes from "./actions";

export const movieSearchStart = (substring) => { 
  return {
    type: actionTypes.MOVIE_SEARCH_START,
    substring,
  };
};
