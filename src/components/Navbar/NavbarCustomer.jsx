import { useState } from 'react';
import React from 'react';
import './Navbar.css';
import { MenuListCustomer } from './MenuListCustomer';

function NavbarCustomer() {
  //state เปิดปิด hamburger
  const [clicked, setClicked] = useState(false);
  // Loop menu
  const menuList = MenuListCustomer.map(({ url, title }, index) => {
    const icon =
      title === 'Profile'
        ? 'fa-user'
        : title === 'Order'
        ? 'fa-th-list'
        : title === 'Product'
        ? 'fa-shopping-bag'
        : 'fa-door-open';
    return (
      <li key={index}>
        <a>
          <i className={`fas ${icon} `} />
          &nbsp;{title}
        </a>
      </li>
    );
  });

  // function click
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <div className='logo'>
        Life<font>Great</font>
      </div>

      <a href='#' className='notification'>
        <i className='fas fa-shopping-cart' />
        <span className='badge'>15</span>
      </a>

      <div className='menu-icon' onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={clicked ? 'menu-list' : 'menu-list close'}>{menuList}</ul>
    </nav>
  );
}

export default NavbarCustomer;
