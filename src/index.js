import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Website from './Website';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Website/>, document.getElementById('root'));
serviceWorker.unregister();
