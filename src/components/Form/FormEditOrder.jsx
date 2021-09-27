import React from 'react';
import './FormInput.css';
import './ContainerForm.css';
import './FormEditOrder.css';
import './FormLineByLine.css';

function FormEditOrder() {
  return (
    <div className='container-form'>
      <div className='form-all form-width'>
        <header>FormEditOrder</header>
        <form action='#'>
          <div className='image-form'>
            <img
              src='https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
              alt=''
            />
          </div>

          <label className='label' for='Bank'>
            Bank Name:
          </label>
          <div className='dbl-field-byLine'>
            <div className='field'>
              <input type='text' placeholder='Bank' id='Bank' />
              <i class='far fa-building'></i>
            </div>
          </div>

          <label className='label' for='Account'>
            Account Number:
          </label>
          <div className='dbl-field-byLine'>
            <div className='field'>
              <input type='text' placeholder='Account No.' id='Account' />
              <i class='fas fa-book-open'></i>
            </div>
          </div>

          <label className='label' for='OrderDate'>
            Order Date:
          </label>
          <div className='dbl-field-byLine'>
            <div className='field'>
              <input
                id='OrderDate'
                placeholder='Enter your date of birth'
                className='textbox-n'
                type='text'
                onFocus={(e) => (e.currentTarget.type = 'date')}
                onBlur={(e) => (e.currentTarget.type = 'text')}
                id='date'
              />
              <i class='fas fa-calendar-alt'></i>
            </div>
          </div>

          <label className='label' for='PaymentStatus'>
            Payment Status:
          </label>
          <div className='dbl-field-byLine'>
            <div className='field'>
              <select name='gender' id='PaymentStatus' required>
                <option value='' disabled selected>
                  Payment Status
                </option>
                <option value='Female'>pedding</option>
                <option value='Female'>complated</option>
              </select>
            </div>
          </div>

          <div className='button-area'>
            <button type='reset' className='clear fas fa-broom'>
              &nbsp;Clear
            </button>

            <button type='submit' className='register fas fa-folder-plus'>
              &nbsp;Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormEditOrder;
