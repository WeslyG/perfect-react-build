import { compose, createStore } from '@reduxjs/toolkit';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { rootReducer } from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('store', serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

const store = createStore(rootReducer, composeEnhancers());

store.subscribe(() => saveToLocalStorage(store.getState()));

const root = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root,
);
