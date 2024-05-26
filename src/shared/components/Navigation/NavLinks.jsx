import React from "react";

import './NavLinks.css'
import { NavLink } from "react-router-dom";

const NavLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to='/'>ALL Users</NavLink>
        </li>
        <li>
            <NavLink to='/u1/places'>My Places</NavLink>
        </li>
        <li>
            <NavLink to='/places/new'>ADD Place</NavLink>
        </li>
        <li>
            <NavLink to='/auth'>AUthenticate</NavLink>
        </li>
    </ul>
}

export default NavLinks;    