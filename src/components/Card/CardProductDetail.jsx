import React from 'react';
import Topic from '../Topic/Topic';
import './CardProductDetail.css';
import './CardProfile.css';
import './CardHorizaltal.css';

function CardProductDetail() {
  return (
    <>
      <Topic title='detail' />
      <div className='container-card-hz'>
        <div className='card-frame-hz'>
          <div className='card-part1-hz'>
            <div className='image-detail-square '>
              <img
                src='https://images.unsplash.com/photo-1619893072134-1699f6856102?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80'
                alt=''
              />
            </div>
          </div>
          <div className='card-part2-hz'>
            <div className='text-detail'>
              <p>
                Brand: <span> Good Life</span>
              </p>
              <p>
                Price: <span>50฿</span>
              </p>
              <p>
                Detail :
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quo mollitia quia accusantium
                  inventore sit! Sequi facere eius et est error, aliquid, quidem dicta hic dolorem accusantium placeat
                  neque nobis?
                </span>
              </p>
              <div className='add'>
                <div className='product-amount'>
                  <i className='fa fa-minus'></i>&nbsp;&nbsp;
                  <span className='product-number'>1</span>
                  &nbsp;&nbsp;<i className='fa fa-plus'></i>
                </div>
                <div className='btn-add-cart'>
                  <button>add</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}

export default CardProductDetail;
