import React from "react";
import './header.component.css'
import { NavLink } from "react-router-dom"


const Header: React.FC = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;