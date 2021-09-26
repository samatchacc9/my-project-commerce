import React from 'react';
import './FormPayment.css';
import './ContainerForm.css';

function FormPayment() {
  return (
    <div className='container-form'>
      <div class='form-payment'>
        <header>Payment Record</header>
        <div class='summary'>
          <div class='summary-text'>
            <h3>Summary</h3>
          </div>
          <div class='summary-price'>
            <h3>฿1020</h3>
          </div>
        </div>
        <div class='bank'>
          <div class='bank-title'>
            <h3>ชำระเงินผ่านบัญชีธนาคาร</h3>
          </div>
          <div class='bank-detail'>
            <h4>ธนาคารไทยพาณิชย์ SCB</h4>
            <h4>ชื่อบัญชี บริษัท ไลฟ์เกรท จำกัด</h4>
            <h4>เลขบัญชี: 468-0000-000</h4>
          </div>
        </div>
        <div class='bank-text'>
          <h4>*กรุณาเก็บหลักฐานการโอนเงิน</h4>
        </div>

        <form action='#'>
          <div class='dbl-field'>
            <div class='field'>
              <select name='bank' id='bank' required>
                <option value='' disabled selected>
                  Select Your Bank
                </option>
                <option value='scb'>SCB</option>
                <option value='tmb'>TMB</option>
              </select>
            </div>

            <div class='field'>
              <input type='text' placeholder='Enter Acoount Number' />
              <i class='fas fa-user'></i>
            </div>
          </div>

          <div class='dbl-field'>
            <div class='field'>
              <input
                placeholder='Enter Date'
                class='textbox-n'
                type='text'
                onFocus={(e) => (e.currentTarget.type = 'date')}
                onBlur={(e) => (e.currentTarget.type = 'text')}
                id='date'
              />
              <i class='far fa-calendar-alt'></i>
            </div>

            <div class='field'>
              <input type='file' id='myfile' name='myfile' class='upload-box' />
            </div>
          </div>

          <div class='button-area'>
            <button type='reset' class='btn-clear'>
              Clear
            </button>

            <button type='submit' class='btn-link'>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormPayment;
