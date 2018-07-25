import {FETCH_MOVIES, NEW_MOVIE, DELETE_MOVIE} FROM './types'

const API_KEY = "77a8ace8"
    fetch()
export const fetchMovies = () => dispatch => {
  console.log('movies being fetched!')
  fetch('http://www.omdbapi.com/?s=batman&apikey='+API_KEY,
  .then (res => res.json())
  .then (posts =>
    dispatch({
      type: FETCH_MOVIES,
      payload: movies
    }))
  }



export const createMovie = (newMovie) => dispatch => {
  console.log('movie being created!')
  fetch('http://www.omdbapi.com/?s=batman&apikey='+API_KEY,
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(newMovie)
  })
    .then(res => res.stringify())
    .then(addMovie = dispatch({
      type: ADD_MOVIE,
      payload: addMovie
    }))




export const deleteMovie = (deleteMovie) => dispatch => {
  console.log('movie getting deleted!')
  fetch('http://www.omdbapi.com/?s=batman&apikey='+deleteMovie,
  method: 'DELETE',
  headers: {
    'content-type': 'application/json'
  }
  body: JSON.stringify(deleteMovie)
})
  .then(res => res.json())
  .then(deleteMovie => dispatch({
    type: DELETE_MOVIE,
    payload: deleteMovie
  }))
  }
