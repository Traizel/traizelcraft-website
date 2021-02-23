import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import {useSelector} from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/downloads';
    loginLinkData.text = 'Downloads';
  }

  return (
    <div className="nav">
      <Link to="/">
        <h2 className="nav-title">TraizelCraft Network</h2>
      </Link>
      <div>
        <Link className="navLink" to='/'>
          Home
        </Link>
        <>
          <Link className="navLink" to="/events">
            Events
            </Link>
        </>
        <>
          <Link className="navLink" to="/news">
            News
            </Link>
        </>
        <>
          <Link className="navLink" to="/faq">
            FAQ
            </Link>
        </>
        <>
          <Link className="navLink" to="/wiki">
            Wiki
            </Link>
        </>
        {user.id && (
          <Link className="navLink" to="/forum">
            Forums
          </Link>
        )}
        <Link className="navLink" to={loginLinkData.path}>
          {loginLinkData.text}
        </Link>

        {user.id && (
          <>
            <LogOutButton className="navLink" />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
