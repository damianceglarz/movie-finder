import axios from 'axios';

const API_KEY = 'e482a550';
const SEARCH_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&t=`;

export const fetchMoviesBySubstring = (substring) => { 
    return axios.get(SEARCH_URL + substring);
};
