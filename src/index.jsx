import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
// import reducer from './reducers';

// const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<App />, document.getElementById('root'));

/* ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
); */
