import myrender from "./myrender";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navigate } from "react-router-dom";
import Home from "./Home";
import Regpage from "./Regpage";

function Nav() {
    const renren = ReactDOM.createRoot(document.getElementById('display'))
    return (
      <div id="navlist">
        <ul>
            <li><button onClick={<Home />}>Home</button></li>
            <li><button onClick={<Regpage />}>Registration</button></li>
        </ul>
      </div>
    );
  }
  
  export default Nav;
  