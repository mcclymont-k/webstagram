import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostRender extends Component {
  render() {
    return(
      <div className='postsContainer'>
        {this.props.posts.map((post, i) =>
          <div className='post'>
            <Link className='picLink' to={`/view/${i}`}><img className='image' src={post.image_src} /></Link>
            <h2>{post.title}</h2>
            <h3>{post.caption}</h3>
            <div className='buttonContainer'>
              <button className='picButton' onClick={this.props.increment.bind(null, i)}>&hearts; {post.likes}</button>
              <Link to={`/view/${i}`} className='picButton'>Comments: {post.comments.length}</Link>
            </div>
          </div>)}
        </div>
    )
  }
}

export default PostRender
