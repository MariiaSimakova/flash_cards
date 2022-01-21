import React from "react";
import "./footer.css"
import gitHubLogo from './github.png'

function Footer () {
    return (
        <footer className="footer">
            <a href="https://github.com/MariiaSimakova/flash_cards">
            <img className="logo" src={gitHubLogo} alt="Github Logo" />
            </a>
        </footer>
    );
}

export default Footer;