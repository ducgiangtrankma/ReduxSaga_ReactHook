import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import reducers from './src/Redux/Reducers/reducers';
import rootSaga from './src/Redux/Saga/rootSaga';
import Main from './src/Main';
import React, {Component} from 'react';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
export default App;
