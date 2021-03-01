import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';
import { useDispatch } from 'react-redux';
import Nav from '../Nav/Nav';

function Header() {

    const history = useHistory();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    

    return (
        <header>
            <div className='header-description'>
                <img className='logo' src='/images/JungleTree1.JPG' onClick={() => { history.push('/') }} />
                <br />
                <h4>Explore | Discover | Conquer | Become Legend</h4>
                <br />
            </div>
            <Nav />
            <div className='header-buttons'>
                <div className='log-in-media-links'>
                    <a href="https://discord.com/invite/qWssnBP" target="_blank"><img src='/images/discord.png' /></a>
                    <a href="https://twitter.com/traizelcraft" target="_blank"><img src='/images/twitter.png' /></a>
                    <a href="https://www.instagram.com/traizelcraft/" target="_blank"><img src='/images/instagram.png' /></a>
                    <a href="https://www.youtube.com/c/Traizel" target="_blank"><img src='/images/youtube.png' /></a>
                    {
                        user.id
                            ?
                            <div className='user-info'>
                                <h4>Hello, {user.username}!</h4>
                            </div>
                            :
                            <div className='user-info'>
                                <></>
                            </div>
                    }
                </div>
            </div>
            <br />
            <br />
            <br />
        </header>
    );
}

export default Header;