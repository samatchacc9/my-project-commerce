import React from 'react';
import Topic from '../Topic/Topic';
import './CardProfile.css';
import './CardHorizaltal.css';
function CardProfile() {
  return (
    <>
      <Topic title='Profile' />
      <div className='container-card-hz'>
        <div className='card-frame-hz'>
          <div className='card-part1-hz'>
            <div className='image-detail-circle'>
              <img
                src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                alt=''
              />
            </div>
            <div className='info-login'>
              <p>
                Username: <span>sorawee</span>
              </p>
              <p>
                Password: <span>123456</span>
              </p>
            </div>
            <div className='button-edit-profile'>
              <button>
                <i className='fas fa-pencil-alt'></i>&nbsp;Edit
              </button>
            </div>
          </div>
          <div className='card-part2-hz'>
            <div className='text-detail'>
              <p>
                Full name: <span>สรวี เทศสน</span>
              </p>
              <p>
                Gender: <span>ชาย</span>
              </p>
              <p>
                Date of birth : <span>04/07/21</span>
              </p>
              <p>
                Phone number : <span>083-xxx-xxxx</span>
              </p>
              <p>
                Email : <span>sorawee@email.com</span>
              </p>
              <p>
                Address : <span>88/8 เกษมสุข เเขวงนครไชศรี เขดดุสิต กรุงเทพ 65000</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProfile;
