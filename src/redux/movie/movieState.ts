import Movie from '../../model/movie';

export const SET_MOVIES = 'SET_MOVIES';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const INCREASE_LIKE = 'INCREASE_LIKE';
export const DECREASE_LIKE = 'DECREASE_LIKE';
export const INCREASE_DISLIKE = 'INCREASE_DISLIKE';
export const DECREASE_DISLIKE = 'DECREASE_DISLIKE';

export interface MovieById {
  [movieId: string]: Movie;
}

interface MovieState {
  allMovieIds: string[];
  byId: MovieById;
  categories: string[];
}

export default MovieState;
