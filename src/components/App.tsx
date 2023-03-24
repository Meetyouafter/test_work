import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, NavLink, Route, Routes,
} from 'react-router-dom';
import store from '../store';
import InputForm from './InputForm/inputForm';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<InputForm />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

export default App;
