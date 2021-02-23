import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const errors = useSelector((store) => store.registrationMessage);
    const dispatch = useDispatch();
    const history = useHistory()

    const registerUser = (event) => {
        event.preventDefault();

        dispatch({
            type: 'REGISTER',
            payload: {
                username: username,
                password: password,
            },
        });
    }; // end registerUser

    return (
        <form className="formPanel" onSubmit={registerUser}>
            <h2>Register</h2>
            {errors.registrationMessage && (
                <h3 className="alert" role="alert">
                    {errors.registrationMessage}
                </h3>
            )}
            <div>
                <label htmlFor="username">
                    Username:
          <input
                        type="text"
                        name="username"
                        value={username}
                        required
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="password">
                    Password:
          <input
                        type="password"
                        name="password"
                        value={password}
                        required
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <input className="btn" type="submit" name="submit" value="Register" />
            </div>
            <button onClick={() => { history.push('/') }}>Go Back</button>
        </form>
    );
}

export default RegisterForm;