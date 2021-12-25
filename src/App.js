import React from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import './styles/App.css';

function App() {
   
    return (
        <BrowserRouter>
            <div className="navbar">
                <div className="navbar__links">
                    <NavLink to = '/about'>О сайте</NavLink>
                    <NavLink to = '/posts'>Посты</NavLink>
                </div>
            </div>
            <Routes>     
                <Route path = '/about' component = {About}/>
                <Route path = '/posts' component = {Posts}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
