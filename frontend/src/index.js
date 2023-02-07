import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './login';
import './login.css';
import Home from './Home';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Regpage from './Regpage';

export default function Rout () {
    return (
        <Router>
            <Routes>
            <Route exact path='/' element={< Login />}></Route>
            <Route exact path='/home' element={< Home />}></Route>
            <Route exact path='/login' element={< Login />}></Route>
            <Route exact path='/registration' element={<Regpage />}></Route>
            </Routes>
        </Router>
    );
}


const display = ReactDOM.createRoot(document.getElementById('root'));
display.render(
    <Rout />
);
// const nav = ReactDOM.createRoot(document.getElementById('nav'));
// nav.render(
//     <Nav />
// );