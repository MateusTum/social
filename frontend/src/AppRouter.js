import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Cover from './pages/Cover';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/" element={<Cover />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
