import {Action} from 'redux';
import Movie from '../../model/movie';
import {
  DELETE_MOVIE,
  INCREASE_LIKE,
  SET_MOVIES,
  DECREASE_LIKE,
  INCREASE_DISLIKE,
  DECREASE_DISLIKE,
} from './movieState';

interface SetMoviesAction extends Action<'SET_MOVIES'> {
  type: typeof SET_MOVIES;
  payload: Movie[];
}

interface DeleteMovieAction extends Action<'DELETE_MOVIE'> {
  type: typeof DELETE_MOVIE;
  payload: string;
}

interface IncreaseLikeAction extends Action<'INCREASE_LIKE'> {
  type: typeof INCREASE_LIKE;
  payload: string;
}

interface DecreaseLikeAction extends Action<'DECREASE_LIKE'> {
  type: typeof DECREASE_LIKE;
  payload: string;
}

interface IncreaseDislikeAction extends Action<'INCREASE_DISLIKE'> {
  type: typeof INCREASE_DISLIKE;
  payload: string;
}

interface DecreaseDislikeAction extends Action<'DECREASE_DISLIKE'> {
  type: typeof DECREASE_DISLIKE;
  payload: string;
}

type MovieAction =
  | SetMoviesAction
  | DeleteMovieAction
  | IncreaseLikeAction
  | DecreaseLikeAction
  | IncreaseDislikeAction
  | DecreaseDislikeAction;

export default MovieAction;
