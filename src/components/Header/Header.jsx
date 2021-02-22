import { HashRouter as Router, Link } from "react-router-dom";
import './Header.css';

function Header() {

    return (
        <>
            <div className='header-description'>
                <img src='/images/JungleTree1.JPG'/>
                <h4>Explore | Discover | Conquer | Become Legend</h4>
            </div>
            <Router>
                <div className='page-links'>
                    <button><Link to="/">Home</Link></button>
                    <button><Link to="/events">Events</Link></button>
                    <button><Link to="/news">News</Link></button>
                    <button><Link to="/faq">FAQ</Link></button>
                    <button><Link to="/wiki">Wiki</Link></button>
                    <button><Link to="/forum">Forums</Link></button>
                    <button><Link to="/downloads">Downloads</Link></button>
                </div>
            </Router>
            <button>Log In</button>
            <a href="https://discord.com/invite/qWssnBP" target="_blank"><img src='/images/discord.png' /></a>
            <a href="https://twitter.com/traizelcraft" target="_blank"><img src='/images/twitter.png' /></a>
            <a href="https://www.instagram.com/traizelcraft/" target="_blank"><img src='/images/instagram.png' /></a>
            <a href="https://www.youtube.com/c/Traizel" target="_blank"><img src='/images/youtube.png' /></a>
            <br />
            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </>
    );
}

export default Header;