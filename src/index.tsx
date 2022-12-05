import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './App';
import { isNotNull } from './helpers/helper';
import { rootReducer } from './reducers';

function saveToLocalStorage(state: unknown) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('store', serializedState);
  } catch (e) {
    console.warn(e);
  }
}

export const store = configureStore({
  reducer: rootReducer,
});

store.subscribe(() => saveToLocalStorage(store.getState()));

const rootElement = isNotNull(document.getElementById('root'));
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
