import React from 'react';
import './Menu.css';
import ReactDOM from 'react-dom';

import{ NavLink} from 'react-router-dom';

const Menu= () => {
    return(
        <div>
            <nav className="navstyle">
                <ul>
                    <li> <NavLink activeClassName="abcd" se to="/home">Home</NavLink></li>
                    <li><NavLink activeClassName="abcd" to="/about">About</NavLink></li>
                    <li><NavLink activeClassName="abcd" to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
export default Menu;
