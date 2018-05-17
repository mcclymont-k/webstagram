import React, { Component } from 'react'
import { Link } from 'react-router'

class Single extends Component {

  componentDidMount() {
  }

  handleForm(e) {
    e.preventDefault()
    const user = document.getElementById('userInput')
    const comment = document.getElementById('commentInput')
    this.props.addComment(this.id, user.value, comment.value)
    user.value = ''
    comment.value = ''
  }

  render() {
    const post = this.props.posts[this.props.match.params.id]
    this.id = Number(this.props.match.params.id)
    return (
      <div className='soloContainer'>
        <h1>{post.title}</h1>
        <div className='lowerContainer'>
          <div className='singlePostContainer'>
            <img className='image' src={post.image_src} />
            <h2>{post.caption}</h2>
            <button className='picButton' onClick={this.props.increment.bind(null, this.id)}>
              &hearts; {post.likes}
            </button>
          </div>
          <div className='commentContainer'>
            <div>
              {post.comments.map((comment, index) =>
                <div className='singleComment'>
                  <h3>{comment.user}:</h3><h4>{comment.comment}</h4>
                  <button className='deleteButton' onClick={this.props.removeComment.bind(null, this.id, index)}>x</button>
                </div>
              )}
            </div>
            <form onSubmit={this.handleForm.bind(this)}>
              <div>
                <input type='text' placeholder='user' id='userInput'/>
                <input type='text' placeholder='comment' id='commentInput'/>
              </div>
              <button type='submit'>&#10004;</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Single
