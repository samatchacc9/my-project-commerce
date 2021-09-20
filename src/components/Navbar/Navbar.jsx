import { useState } from 'react';
import React from 'react';
import './Navbar.css';
import { MenuList } from './MenuList';

function Navbar() {
  //state เปิดปิด hamburger
  const [clicked, setClicked] = useState(false);
  // Loop menu
  const menuList = MenuList.map(({ url, title }, index) => {
    const icon = title === 'Home' ? 'fa-home' : title === 'Login' ? 'fa-sign-in-alt' : 'fa-user-plus';
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

      <div className='menu-icon' onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={clicked ? 'menu-list' : 'menu-list close'}>{menuList}</ul>
    </nav>
  );
}

export default Navbar;
