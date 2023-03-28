import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import store from '../store';
import InputForm from './InputForm/inputForm';
import Shedule from './Shedule/Shedule';
import RoutePage from './Route/Route';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<RoutePage />} />
        <Route path="/shedule" element={<Shedule />} />
        <Route path="/input" element={<InputForm />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

export default App;
