import React, { Component } from 'react'
import { Link, Route, HashRouter as Router } from 'react-router-dom'
import PhotoGrid from './PhotoGrid'
import Single from './Single'

class Main extends Component {

  render() {
    return (
      <div className='mainContainer'>
        <Link to='/'>Webstagram</Link>
        <Router>
          <div>
            <Route exact path='/' render={(props) => <PhotoGrid {...this.props} {...props}/>} />
            <Route exact path='/view/:id' render={(props) => <Single {...this.props} {...props} />} />
          </div>
        </Router>
      </div>
    )
  }
}

export default Main
