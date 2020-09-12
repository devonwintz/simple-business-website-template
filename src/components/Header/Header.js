import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <Link to="/simple-business-website-template/"><div className="logo">YOUR LOGO</div></Link>
                <nav>
                    <ul>
                        <li className="first">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/services">What We Do</Link>
                        </li>
                        <li className="last">
                            <Link to="/#">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default Header;