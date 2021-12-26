import React from 'react';
import {
    BrowserRouter as Router,
  } from "react-router-dom";
import Navbar from './components/UI/navbar/Navbar';
import './styles/App.css';
import AppRouter from './components/AppRouter';

function App() {
   
    return (
            <Router>
                <Navbar/>
                <AppRouter/>
            </Router>
    )
}

export default App;
