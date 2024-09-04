import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from './screens/SignUp.js';
import Welcome from './screens/Welcome.js';
import SignIn from './screens/SignIn.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/SignIn" element={<SignIn/>} />
      <Route path="/SignUp" element={<SignUp/>} />
    </Routes>
  </Router>
);


