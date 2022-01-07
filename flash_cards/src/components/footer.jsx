import React from "react";
import "../components/footer.css"
import gitHubLogo from '../components/github.png'

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