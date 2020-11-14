import produce from 'immer';
import Movie from '../../model/movie';
import MovieAction from './movieActions';
import MovieState, {
  DELETE_MOVIE,
  INCREASE_LIKE,
  SET_MOVIES,
  DECREASE_LIKE,
  DECREASE_DISLIKE,
  INCREASE_DISLIKE,
} from './movieState';

const initialState: MovieState = {
  allMovieIds: [],
  byId: {},
  categories: [],
};

const MovieReducer = (state = initialState, action: MovieAction) => {
  return produce(state, (draft: MovieState) => {
    switch (action.type) {
      case SET_MOVIES: {
        const movies: Movie[] = action.payload;

        movies.forEach((movie) => {
          if (!draft.allMovieIds.includes(movie.id)) {
            draft.allMovieIds.push(movie.id);
          }
          if (!draft.categories.includes(movie.category)) {
            draft.categories.push(movie.category);
          }
          draft.byId[movie.id] = movie;
        });

        return;
      }
      case DELETE_MOVIE: {
        const movieId: string = action.payload;
        const movieIndex: number = draft.allMovieIds.indexOf(movieId);
        const movie: Movie = draft.byId[movieId];

        if (movieIndex !== -1 && movie) {
          const category = movie.category;

          draft.allMovieIds.splice(movieIndex, 1);
          delete draft.byId[movieId];

          const allCategories = draft.allMovieIds.map(
            (id) => draft.byId[id].category,
          );

          if (!allCategories.includes(category)) {
            draft.categories.splice(draft.categories.indexOf(category), 1);
          }
        } else {
          console.error(`Movie with id ${movieId} not found`);
        }

        return;
      }
      case INCREASE_LIKE: {
        const movieId: string = action.payload;
        const movie: Movie = draft.byId[action.payload];

        if (movie) {
          movie.likes += 1;
        } else {
          console.error(`Movie with id ${movieId} not found`);
        }

        return;
      }
      case DECREASE_LIKE: {
        const movieId: string = action.payload;
        const movie: Movie = draft.byId[action.payload];

        if (movie) {
          movie.likes -= 1;
        } else {
          console.error(`Movie with id ${movieId} not found`);
        }

        return;
      }
      case INCREASE_DISLIKE: {
        const movieId: string = action.payload;
        const movie: Movie = draft.byId[action.payload];

        if (movie) {
          movie.dislikes += 1;
        } else {
          console.error(`Movie with id ${movieId} not found`);
        }

        return;
      }
      case DECREASE_DISLIKE: {
        const movieId: string = action.payload;
        const movie: Movie = draft.byId[action.payload];

        if (movie) {
          movie.dislikes -= 1;
        } else {
          console.error(`Movie with id ${movieId} not found`);
        }

        return;
      }
    }
  });
};

export default MovieReducer;
