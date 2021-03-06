import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sample from './Sample';
import {BrowserRouter} from 'react-router-dom';
//import routes from './routes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter><Sample /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
