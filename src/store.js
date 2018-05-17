import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'

import rootReducer from './Reducers/index'

const defaultState = {
  posts: [
    {
      title: 'First',
      image_src: 'https://wallpaperbrowse.com/media/images/750806.jpg',
      caption: 'something here about caption',
      likes: 14,
      comments: [{user: 'Tom', comment: 'cool pic :)'}, {user: 'Jim', comment: 'Awesome!!!'}, {user: 'Mum', comment: 'Haha you are silly!'}]
    },
    {
      title: 'Second',
      image_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSclNpa-eIZaCC_Q5hChdJ4OJliGINv3SOv_IPjpsh3K1AoEMYT',
      caption: 'something here about caption',
      likes: 14,
      comments: [{user: 'Tom', comment: 'cool pic :)'}, {user: 'Jim', comment: 'Awesome!!!'}, {user: 'Mum', comment: 'Haha you are silly!'}]
    },
    {
      title: 'Third',
      image_src: 'http://madartlab.wpengine.netdna-cdn.com/files/2013/02/DAM-IT-by-Amy-Davis-Roth-864x450.jpg',
      caption: 'something here about caption',
      likes: 14,
      comments: [{user: 'Tom', comment: 'cool pic :)'}, {user: 'Jim', comment: 'Awesome!!!'}, {user: 'Mum', comment: 'Haha you are silly!'}]
    },
    {
      title: 'Fourth',
      image_src: 'http://madartlab.wpengine.netdna-cdn.com/files/2013/03/Bunnies-Ink-on-Paper-by-Amy-Davis-Roth-864x450.jpg',
      caption: 'something here about caption',
      likes: 14,
      comments: [{user: 'Tom', comment: 'cool pic :)'}, {user: 'Jim', comment: 'Awesome!!!'}, {user: 'Mum', comment: 'Haha you are silly!'}]
    },
    {
      title: 'Fifth',
      image_src: 'http://www.amberallen.com/wp-content/uploads/2014/06/254-1404300TF9.jpg',
      caption: 'something here about caption',
      likes: 14,
      comments: [{user: 'Tom', comment: 'cool pic :)'}, {user: 'Jim', comment: 'Awesome!!!'}, {user: 'Mum', comment: 'Haha you are silly!'}]
    },
    {
      title: 'Sixth',
      image_src: 'https://hdbackgroundspot.com//storage/upload/cool-backgrounds/cool-backgrounds-60.jpg',
      caption: 'something here about caption',
      likes: 14,
      comments: [{user: 'Tom', comment: 'cool pic :)'}, {user: 'Jim', comment: 'Awesome!!!'}, {user: 'Mum', comment: 'Haha you are silly!'}]
    }
  ]
}

const store = createStore(rootReducer, defaultState)
export default store
