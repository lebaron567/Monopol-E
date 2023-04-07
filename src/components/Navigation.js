import React from 'react';
import {NavLink} from "react-router-dom"
const Navigation = () => {
    return (
       <div className="navigation">
        <ul>
            <NavLink to="/" className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                <li>acceuil</li>
            </NavLink>
            <NavLink to="/a" className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                <li>connexion</li>
            </NavLink>
            <NavLink to="/game" className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                <li>game</li>
            </NavLink>
        </ul>
       </div>
    );
};

export default Navigation;