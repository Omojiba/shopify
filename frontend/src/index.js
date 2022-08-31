import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { productsApi } from './features/productsApi';
import { cartReducer } from './features/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
    devTools: true,
  
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


