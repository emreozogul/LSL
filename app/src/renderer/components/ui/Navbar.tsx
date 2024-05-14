import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/navbar.css';


export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h1>LSL</h1>
            </div>
            <div className="navbar__links">
                <Link to="/">Dashboard</Link>
                <Link to="/clients">Clients</Link>
            </div>
        </nav>
    );
}