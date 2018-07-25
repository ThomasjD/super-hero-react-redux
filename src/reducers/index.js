import {combineReducers} from 'redux'
import movieListReducers from '/movieListReducers'

//combine reducers
export default combineReducers({
  movies: moviesReducer
})
