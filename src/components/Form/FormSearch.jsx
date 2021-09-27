import React from 'react';
import './ContainerForm.css';
import './FormInput.css';
import './FormSearch.css';

function FormSearch() {
  return (
    <div className='control-form'>
      <div className='form-all-no-border form-width'>
        <header className='mrg-btt header-sub'>Search Order</header>
        <form action='#'>
          <div className='dbl-field-col3'>
            <div className='field'>
              <input type='text' placeholder='first-last name' />
              <i className='fas fa-user'></i>
            </div>

            <div className='field'>
              <input
                placeholder='Order date'
                className='textbox-n'
                type='text'
                onFocus={(e) => (e.currentTarget.type = 'date')}
                onBlur={(e) => (e.currentTarget.type = 'text')}
                id='date'
              />
              <i class='fas fa-calendar-alt'></i>
            </div>

            <div className='field'>
              <select name='gender' id='gender' required>
                <option value='' disabled selected>
                  payment status
                </option>
                <option value='Female'>pedding</option>
                <option value='Female'>completed</option>
              </select>
            </div>
          </div>

          {/* <div className='dbl-field'>
            <div className='field'>
              <input
                placeholder='Enter your date of birth'
                className='textbox-n'
                type='text'
                onFocus={(e) => (e.currentTarget.type = 'date')}
                onBlur={(e) => (e.currentTarget.type = 'text')}
                id='date'
              />
              <i className='fas fa-birthday-cake'></i>
            </div>
            <div className='field'>
              <select name='gender' id='gender' required>
                <option value='' disabled selected>
                  select your gender
                </option>
                <option value='Female'>Male</option>
                <option value='Female'>Female</option>
              </select>
            </div>
          </div> */}

          {/* <div className='button-area'>
            <button type='reset' className='clear fas fa-broom'>
              &nbsp;Clear
            </button>

            <button type='submit' className='register fas fa-folder-plus'>
              &nbsp;Register
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default FormSearch;
