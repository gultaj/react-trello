import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store';
import Root from './components/root.js';

const history = createHistory();
const store = configureStore(history);

const target = document.getElementById('app');

ReactDOM.render(<Root routerHistory={history} store={store}/>, target);
