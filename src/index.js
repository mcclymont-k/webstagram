import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReduxTest from './ReduxTest';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReduxTest />, document.getElementById('root'));
registerServiceWorker();
