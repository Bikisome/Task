import React from 'react';
import { BrowserRouter as Router, Route,  Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import PostDetailsPage from './PostDetailsPage';
import './App.css';

function App() {
  return (
   <BrowserRouter>
     
        <Routes>
          <Route path="/"  element={<HomePage/>} />
          <Route path="/post/:id" element={<PostDetailsPage/>} />
          </Routes>
      </BrowserRouter>
   
  );
}

export default App;
