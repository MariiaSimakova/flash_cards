import React from "react";
import './header.css'

function Header () {
    return (
        <header className="header">
            <nav className="navigation">
                <ul className="navbar">
                    <li><a href="#home" className="home">Home</a></li>
                    <li><a href="#vocabulary" className="vocabulary">Vocabulary</a></li>
                    <li><a href="#cards" className="cards">Flash Cards</a></li>
                    <li><a href="#categories" className="categories">Categories</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

