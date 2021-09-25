import { useState } from 'react';
import React from 'react';
import './Navbar.css';
import { MenuList } from './MenuList';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';

function Navbar() {
  //state เปิดปิด hamburger
  const [clicked, setClicked] = useState(false);
  // Loop menu
  const menuList = MenuList.map(({ to, title }, index) => {
    const icon = title === 'Home' ? 'fa-home' : title === 'Login' ? 'fa-sign-in-alt' : 'fa-user-plus';
    return (
      <li key={index}>
        <NavLink exact to={to} activeClassName='active'>
          <i className={`fas ${icon} `} />
          &nbsp;{title}
        </NavLink>
      </li>
    );
  });

  // function click
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <Link to='/' className='logo'>
        Life<font>Great</font>
      </Link>

      <div className='menu-icon' onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={clicked ? 'menu-list' : 'menu-list close'}>
        <Searchbar />
        {menuList}
      </ul>
    </nav>
  );
}

export default Navbar;
