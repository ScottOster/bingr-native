import axios from 'axios';
import apiKey from './api-key';

const req = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const fetchTopMovies = (pageNumber) => {
  return req.get(`/movie/top_rated?api_key=${apiKey}&page=${pageNumber}`);
};

export const fetchGenres = () => {
  return req.get(`/genre/movie/list?api_key=${apiKey}`);
};

export const fetchMovieById = (movieId) => {
  return req.get(`/movie/${movieId}/watch/providers?api_key=${apiKey}`);
};

export const fetchProviders = () => {
  return req.get(`/watch/providers/movie?api_key=${apiKey}&language=en-US`);
};

export const fetchSingleMovieById = (movieId) => {
  return req.get(`/movie/${movieId}?api_key=${apiKey}`);
};
