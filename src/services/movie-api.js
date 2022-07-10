import axios from 'axios';

const API_KEY = 'ed9b8dd4dcf22d9d746c4e21c6321e97';
const API_BASE_URL = 'https://api.themoviedb.org/3';
// const API_IMG_URL = 'https://image.tmdb.org/t/p/w500';
// resource: 'trending',
//       mediaType: 'movie',
//       timeWindow: isDay ? 'day' : 'week',

axios.defaults.baseURL = API_BASE_URL;

export async function fetchMovies(page) {
  const rawData = await axios.get(
    `/trending/movie/day?page=${page}&api_key=${API_KEY}`
  );
  return rawData.data.results;
}
