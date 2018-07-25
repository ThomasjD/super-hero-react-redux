import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../actions/movieActions'

class Movielist extends Component {

  componentWillMount() {
    this.props.fetchMovies()
  }

  render() {
    const postMovies = this.props.posts.map(movie => (
      <div key = {movie.id}>
        <h3>{movie.title} </h3>
        <p>{movie.image}</p>
      </div>
    )
  )

  return (
    <div>
      <h1> Movies </h1>
      {postMovies}
    </div>
    )
  }
}


Movielist.propTypes = {
  postMovies: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  movies: state.movies.movieList
  movie: state.movies.movie
})

export default connect(mapStateToProps, {fetchMovies})(Movielist))
