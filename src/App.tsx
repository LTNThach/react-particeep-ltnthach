import React from 'react';
import MovieCard from './components/MovieCard';
import Movie from './model/movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
import CategoryDropdown from './components/CategoryDropdown';
import MoviePagination from './components/MoviePagination';
import NumberMoviesDropdown from './components/NumberMoviesDropdown';

export type AppStateProps = {
  movies: Movie[];
  categories: string[];
};

export type AppDispatchProps = {
  getAllMovies: () => void;
  deleteMovie: (movieId: string) => void;
  increaseLike: (movieId: string) => void;
  decreaseLike: (movieId: string) => void;
  increaseDislike: (movieId: string) => void;
  decreaseDislike: (movieId: string) => void;
};

export type AppProps = AppStateProps & AppDispatchProps;

type AppState = {
  categorySelected: string;
  offsetPage: number;
  numberMoviesPerPage: number;
};

const listNumberMoviesPerPage = [4, 8, 12];

export default class App extends React.PureComponent<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      categorySelected: 'All',
      offsetPage: 0,
      numberMoviesPerPage: 4,
    };
  }

  componentDidMount() {
    this.props.getAllMovies();
  }

  componentDidUpdate(prevProps: AppProps) {
    if (this.props.categories.length !== prevProps.categories.length) {
      this.setState({
        categorySelected: 'All',
      });
    }
  }

  selectCategory(category: string) {
    this.setState({
      categorySelected: category,
      offsetPage: 0,
    });
  }

  selectNumberMoviesPerPage(numberMoviesPerPage: number) {
    const newOffset = Math.floor(
      (this.state.numberMoviesPerPage * this.state.offsetPage) /
        numberMoviesPerPage,
    );

    this.setState({
      numberMoviesPerPage,
      offsetPage: newOffset,
    });
  }

  renderMovie(movie: Movie) {
    return (
      <MovieCard
        key={movie.id}
        movie={movie}
        deleteMovie={() => this.props.deleteMovie(movie.id)}
        increaseLike={() => this.props.increaseLike(movie.id)}
        decreaseLike={() => this.props.decreaseLike(movie.id)}
        increaseDislike={() => this.props.increaseDislike(movie.id)}
        decreaseDislike={() => this.props.decreaseDislike(movie.id)}
      />
    );
  }

  goToPage(pageNumber: number) {
    this.setState({
      offsetPage: pageNumber,
    });
  }

  render() {
    const moviesFiltered = this.props.movies.filter((movie) => {
      if (this.state.categorySelected !== 'All') {
        return movie.category === this.state.categorySelected;
      }

      return true;
    });
    const pagesCount = Math.ceil(
      moviesFiltered.length / this.state.numberMoviesPerPage,
    );
    const moviesShowedInPage = moviesFiltered.splice(
      this.state.offsetPage * this.state.numberMoviesPerPage,
      this.state.numberMoviesPerPage,
    );

    return (
      <div className="App">
        {this.props.categories.length > 0 && (
          <CategoryDropdown
            categories={this.props.categories}
            categorySelected={this.state.categorySelected}
            selectCategory={(category: string) => this.selectCategory(category)}
          />
        )}
        <div className="App__ListMovies">
          {moviesShowedInPage.map((movie) => this.renderMovie(movie))}
        </div>
        <div className="App__Pagination">
          <div className="App__Pagination__Dropdown">
            <NumberMoviesDropdown
              listNumberMoviesPerPage={listNumberMoviesPerPage}
              numberMoviesSelected={this.state.numberMoviesPerPage}
              selectNumberMovies={(nbMoviesPerPage: number) =>
                this.selectNumberMoviesPerPage(nbMoviesPerPage)
              }
            />
          </div>
          {pagesCount > 1 && (
            <MoviePagination
              pagesCount={pagesCount}
              offsetPage={this.state.offsetPage}
              goToPage={(pageNumber: number) => this.goToPage(pageNumber)}
            />
          )}
        </div>
      </div>
    );
  }
}
