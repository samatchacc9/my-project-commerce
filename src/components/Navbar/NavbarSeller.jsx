import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import { MenuListSeller } from './MenuListSeller';

function NavbarSeller() {
  const [clicked, setClicked] = useState(false);

  const menuListSeller = MenuListSeller.map(({ url, title }, index) => {
    const icon =
      title === 'Manage Order' ? 'fa-th-list' : title === 'Manage Product' ? 'fa-shopping-bag' : 'fa-door-open';
    return (
      <li key={index}>
        <a>
          <i class={`fas ${icon}`} />
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

      <ul className={clicked ? 'menu-list' : 'menu-list close'}>{menuListSeller}</ul>
    </nav>
  );
}

export default NavbarSeller;
