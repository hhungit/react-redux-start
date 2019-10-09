import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/HomePage';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
//Hưng  
ReactDOM.render(
 <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
