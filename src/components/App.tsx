import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Shedule from './Shedule/Shedule';
import RoutePage from './Route/Route';
import InputPage from './InputPage/InputPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Shedule />} />
      <Route path="/shedule" element={<Shedule />} />
      <Route path="/input" element={<InputPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
