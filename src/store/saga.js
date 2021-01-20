import { takeEvery, call, put } from "redux-saga/effects";
import * as actionTypes from "./actions";
import { fetchMoviesBySubstring } from "../API/movie";

const movieSearchStart = function* ({ substring }) {
  yield put({ type: actionTypes.MOVIE_SEARCH_LOADING });

  try {
    const { data } = yield call(fetchMoviesBySubstring, substring); 

    if (data.Response === "True")
      yield put({ type: actionTypes.MOVIE_SEARCH_SUCCESS, movie: data });
    else 
        throw new Error("Movie not found");
  } catch (error) {
    yield put({ type: actionTypes.MOVIE_SEARCH_FAIL, error });
  }
};

export default function* watchMovieStart() {
  yield takeEvery(actionTypes.MOVIE_SEARCH_START, movieSearchStart);
}
