// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

const App = () => {

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/search" element={<SearchPage/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
