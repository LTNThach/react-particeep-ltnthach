import {combineReducers} from 'redux';
import MovieReducer from '../redux/movie/movieReducer';

const rootReducer = combineReducers({
  movieReducer: MovieReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
