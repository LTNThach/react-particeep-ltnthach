import {connect} from 'react-redux';
import App, {AppDispatchProps, AppStateProps} from './App';
import Movie from './model/movie';
import {
  decreaseDislike,
  decreaseLike,
  deleteMovie,
  getAllMovies,
  increaseDislike,
  increaseLike,
} from './redux/movie/movieActionCreators';
import {RootState} from './store/rootReducer';

const mapDispatchToProps = (dispatch: any): AppDispatchProps => {
  return {
    getAllMovies: () => dispatch(getAllMovies()),
    deleteMovie: (movieId: string) => dispatch(deleteMovie(movieId)),
    increaseLike: (movieId: string) => dispatch(increaseLike(movieId)),
    decreaseLike: (movieId: string) => dispatch(decreaseLike(movieId)),
    increaseDislike: (movieId: string) => dispatch(increaseDislike(movieId)),
    decreaseDislike: (movieId: string) => dispatch(decreaseDislike(movieId)),
  };
};

const mapStateToProps = (state: RootState): AppStateProps => {
  const {movieReducer} = state;
  const movies: Movie[] = movieReducer.allMovieIds.map(
    (movieId) => movieReducer.byId[movieId],
  );

  return {
    movies,
    categories: movieReducer.categories,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
