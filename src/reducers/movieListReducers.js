import { FETCH_MOVIES, NEW_MOVIE, DELETE_MOVIE } FROM '.../ctions/types'

const initialState = {
  movieList: [],
  movie: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
    console.log('fetching_movies')
    return {
      ...state,
      movieList: action.payload //list of movies
    }

    case NEW_MOVIE:
    return {
      ...state,
      newMovie: action.payload
    }

    case DELETE_MOVIE:
    RETURN {
      ...state,
      deleteMovie: action.payload
    }
  }

}
