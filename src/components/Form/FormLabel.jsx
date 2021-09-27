import React from 'react';

import './FormInput.css';
import './ContainerForm.css';
import './FormEditOrder.css';
import './FormLabel.css';

function FormLabel() {
  return (
    <div className='container'>
      <div className='title'>Registration</div>
      <div className='content'>
        <form action='#'>
          <div className='user-details'>
            <div className='input-box'>
              <span className='details'>Full Name</span>
              <input type='text' placeholder='Enter your name' required />
            </div>
            <div className='input-box'>
              <span className='details'>Username</span>
              <input type='text' placeholder='Enter your username' required />
            </div>

            <div className='input-box'>
              <select name='province' id='province' required>
                <option value='' disabled selected>
                  select your province
                </option>
                <option value='Bangkok'>Bangkok</option>
                <option value='Chang mai'>Chang mai</option>
              </select>
            </div>

            <div className='input-box'>
              <span className='details'>Email</span>
              <input type='text' placeholder='Enter your email' required />
            </div>
            <div className='input-box'>
              <span className='details'>Phone Number</span>
              <input type='text' placeholder='Enter your number' required />
            </div>
            <div className='input-box'>
              <span className='details'>Password</span>
              <input type='text' placeholder='Enter your password' required />
            </div>
            <div className='input-box'>
              <span className='details'>Confirm Password</span>
              <input type='text' placeholder='Confirm your password' required />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormLabel;
