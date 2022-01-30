import {NavLink, Outlet} from "react-router-dom";
import Footer from '../Layout/Footer/Footer';
import '../Layout/Footer/footer.css'
import {FaSwatchbook} from 'react-icons/fa';
import '../Layout/header.css'


function Layout () {
    return (
        <>
            <header className="header">            
                <nav className="navigation">
                    <ul className="navbar">
                        <li><NavLink to="/home" className="logo"><FaSwatchbook/></NavLink></li>
                        <li><NavLink to="/" className="home">Home</NavLink></li>
                        <li><NavLink to="/vocabulary" className="vocabulary">Vocabulary</NavLink></li>
                        <li><NavLink to="/cards" className="cards">Flash Cards</NavLink></li>
                        <li><NavLink to="/categories" className="categories">Categories</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </>   
    )   
}
    
export default Layout;