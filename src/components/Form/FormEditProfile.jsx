import React from 'react';
import Topic from '../Topic/Topic';
import './FormEditProfile.css';

function FormEditProfile() {
  return (
    <div className='edit-profile-scale'>
      <div className='form-edit-profile'>
        <header>Edit Profile</header>
        <form action='#'>
          <div className='image'>
            <img
              src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
          </div>
          <div className='title-edit'>Personal Data</div>
          <div className='dbl-field'>
            <div className='field'>
              <input type='text' placeholder='Enter your first name' />
              <i className='fas fa-user'></i>
            </div>
            <div className='field'>
              <input type='text' placeholder='Enter your last name' />
              <i className='fas fa-user'></i>
            </div>
          </div>
          <div className='dbl-field'>
            <div className='field'>
              <input type='text' placeholder='Enter your phone' />
              <i className='fas fa-phone-alt'></i>
            </div>
            <div className='field'>
              <input type='text' placeholder='Enter your email' />
              <i className='fas fa-envelope'></i>
            </div>
          </div>
          <div className='dbl-field'>
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
          </div>
          <div className='title-edit '>Address Data</div>
          <div className='dbl-field'>
            <div className='field'>
              <select name='province' id='province' required>
                <option value='' disabled selected>
                  select your province
                </option>
                <option value='Bangkok'>Bangkok</option>
                <option value='Chang mai'>Chang mai</option>
              </select>
            </div>
            <div className='field'>
              <select name='district' id='district' required>
                <option value='' disabled selected>
                  select your district
                </option>
                <option value='Dusit'>Dusit</option>
                <option value='Bangrak'>Bangrak</option>
              </select>
            </div>
          </div>
          <div className='dbl-field'>
            <div className='field'>
              <select name='Sub-district' id='Sub-district' required>
                <option value='' disabled selected>
                  select your sub district
                </option>
                <option value='Bangkoknoi'>Bangkoknoi</option>
                <option value='Saimai'>Saimaii</option>
              </select>
            </div>
            <div className='field'>
              <input type='text' placeholder='Enter house number' />
              <i className='fas fa-house-user'></i>
            </div>
          </div>
          <div className='dbl-field'>
            <div className='field'>
              <input type='text' placeholder='Enter your village' />
              <i className='fas fa-house-user'></i>
            </div>
            <div className='field'>
              <input type='text' placeholder='Enter your zip code' />
              <i className='fas fa-house-user'></i>
            </div>
          </div>
          <div className='title-edit '>Login Data</div>
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
          <div class='field'>
            <input type='file' id='myfile' name='myfile' class='upload-box' />
          </div>

          <div className='button-area'>
            <button type='reset' className='fas fa-pencil-alt'>
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormEditProfile;
