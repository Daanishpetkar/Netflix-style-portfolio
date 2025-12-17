import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{ backgroundColor: '#000', color: '#fff', padding: '1em 2em' }}>
            <h1>Netflix-Style Portfolio</h1>
            <nav>
                <Link to="/" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Home</Link>
                <Link to="/projects" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Projects</Link>
            </nav>
        </header>
    );
};

export default Header;