import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';
import '../App/Bootstrap.css';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />

      <center>
        <h3>Not a member?</h3>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>
      <button onClick={() => { history.goBack() }} className="btn btn-primary">Go Back</button>
    </div>
  );
}

export default LoginPage;
