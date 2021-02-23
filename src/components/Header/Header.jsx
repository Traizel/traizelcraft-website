import { useHistory } from 'react-router-dom'
import './Header.css';

function Header() {

    const history = useHistory()

    return (
        <header>
            <div className='header-description'>
                <img src='/images/JungleTree1.JPG'/>
                <br />
                <h4>Explore | Discover | Conquer | Become Legend</h4>
                <br />
            </div>
            <div className='header-buttons'>
                <div className='page-links'>
                    <button onClick={() => { history.push('/') }}>Home</button>
                    <button onClick={() => { history.push('/events') }}>Events</button>
                    <button onClick={() => { history.push('/news') }}>News</button>
                    <button onClick={() => { history.push('/faq') }}>FAQ</button>
                    <button onClick={() => { history.push('/wiki') }}>Wiki</button>
                    <button onClick={() => { history.push('/forum') }}>Forums</button>
                    <button onClick={() => { history.push('/downloads') }}>Downloads</button>
                </div>
            <div className='log-in-media-links'>
                <a href="https://discord.com/invite/qWssnBP" target="_blank"><img src='/images/discord.png' /></a>
                <a href="https://twitter.com/traizelcraft" target="_blank"><img src='/images/twitter.png' /></a>
                <a href="https://www.instagram.com/traizelcraft/" target="_blank"><img src='/images/instagram.png' /></a>
                <a href="https://www.youtube.com/c/Traizel" target="_blank"><img src='/images/youtube.png' /></a>
                <button onClick={() => { history.push('/login') }}>Log In</button>
                <button onClick={() => { history.push('/register') }}>Register</button>
            </div>
            </div>
            <br />
        </header>
    );
}

export default Header;