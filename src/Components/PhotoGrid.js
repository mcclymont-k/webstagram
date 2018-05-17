import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PostRender from './PostRender'


class PhotoGrid extends Component {
  componentDidMount() {

  }
  
  render() {
    return (
      <div>
        <PostRender {...this.props}/>
      </div>
    )
  }
}

export default PhotoGrid
