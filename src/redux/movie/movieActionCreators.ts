import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import Movie from '../../model/movie';
import {movies$} from '../../movies';
import MovieAction from './movieActions';
import {
  DELETE_MOVIE,
  INCREASE_LIKE,
  SET_MOVIES,
  DECREASE_LIKE,
  DECREASE_DISLIKE,
  INCREASE_DISLIKE,
} from './movieState';

export const getAllMovies = (): ThunkAction<
  void,
  unknown,
  unknown,
  MovieAction
> => {
  return async (dispatch: ThunkDispatch<unknown, unknown, MovieAction>) => {
    try {
      const movies: Movie[] = await movies$;
      dispatch(setMovies(movies));
    } catch (err) {
      console.error(err);
    }
  };
};

export const setMovies = (movies: Movie[]): MovieAction => {
  return {
    type: SET_MOVIES,
    payload: movies,
  };
};

export const deleteMovie = (movieId: string): MovieAction => {
  return {
    type: DELETE_MOVIE,
    payload: movieId,
  };
};

export const increaseLike = (movieId: string): MovieAction => {
  return {
    type: INCREASE_LIKE,
    payload: movieId,
  };
};

export const decreaseLike = (movieId: string): MovieAction => {
  return {
    type: DECREASE_LIKE,
    payload: movieId,
  };
};

export const increaseDislike = (movieId: string): MovieAction => {
  return {
    type: INCREASE_DISLIKE,
    payload: movieId,
  };
};

export const decreaseDislike = (movieId: string): MovieAction => {
  return {
    type: DECREASE_DISLIKE,
    payload: movieId,
  };
};
