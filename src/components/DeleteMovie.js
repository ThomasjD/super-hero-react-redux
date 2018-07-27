import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/movieActions'

class DeleteMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Title: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentWillMount() {
    this.props.fetchPosts()
  }

  onChange(e) {
    this.setState({ [e.target.Title]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    const post = {
      title: this.state.Title,
    }
  }


    this.props.createPost(post)
  }

  render() {
  return (
    <div>
      <h1>Delete Movie</h1>
      <form onSubmit={this.onSubmit}>
        <div>
          <label>Title: </label>
          <br />
          <input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.state.title}
          />
        </div>
        <br />
        <div>
          <label>Body: </label>
          <br />
          <textarea
            name="body"
            onChange={this.onChange}
            value={this.state.body}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
}

}
