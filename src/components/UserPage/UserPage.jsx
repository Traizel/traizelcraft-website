import React, { useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import moment from 'moment';

function UserPage() {

  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const changePassword = (event) => {
    event.preventDefault();

    dispatch({
      type: 'UPDATE_PASSWORD',
      payload: {
        password: password,
        user: user.id,
      },
    });

    alert('Password Updated!');
    setPassword('');
  }; // end changePassword

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container header">
      <h2 className="text-info">Welcome, {user.username}!</h2>
      <p className="text-warning">Joined: {moment(user.join_date).format('MMM Do, YYYY')}</p>
      <br />

      <form className="formPanel" onSubmit={changePassword}>
      <div className="form-group">
        <label htmlFor="password">
          <h5>Change Password:</h5>
          <br />
          <input
            className="form-control"
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
        <input className="btn btn-outline-success" type="submit" name="submit" value="Change Password" />
      </form>
      <br />
      <LogOutButton className="btn btn-danger" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
