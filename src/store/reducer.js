import * as actionTypes from "./actions";

const initState = {
  movie: null,
  movieLoading: false,
  movieError: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.MOVIE_SEARCH_LOADING:
      // Im changing everything, so there is no need to spread previous state
      return { movieLoading: true, movie: null, movieError: null };
    case actionTypes.MOVIE_SEARCH_SUCCESS:
      // Im changing everything, so there is no need to spread previous state
      return { movieLoading: false, movieError: null, movie: action.movie };
    case actionTypes.MOVIE_SEARCH_FAIL:
      // Im changing everything, so there is no need to spread previous state
      return { movieLoading: false, movie: null, movieError: action.error };
    default:
      return state;
  } 
};

export default reducer;