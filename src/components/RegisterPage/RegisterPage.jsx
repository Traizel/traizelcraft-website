import React from 'react';
import '../App/Bootstrap.css';
import './RegisterPage.css';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <RegisterForm />

      <center>
        <h3>Already a member?</h3>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button>
      </center>
      <button onClick={() => { history.goBack() }} className="btn btn-primary go-back" >Go Back</button>
    </div>
  );
}

export default RegisterPage;
