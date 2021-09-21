import React from 'react';
import './FormLogin.css';
import './ContainerForm.css';

function FormLogin() {
  return (
    <div className='container'>
      <div className='form-login'>
        <header>Login</header>
        <form action='#'>
          <div className='dbl-field'>
            <div className='field'>
              <input type='text' placeholder='Enter your username' />
              <i className='fas fa-user'></i>
            </div>
            <div className='field'>
              <input type='text' placeholder='Enter your password' />
              <i className='fas fa-lock'></i>
            </div>
          </div>
          <div className='button-area'>
            <button type='submit'>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormLogin;
