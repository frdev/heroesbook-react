import React from 'react';
import { FaUserCircle } from 'react-icons/fa'

import './Header.css';

function Header() {
  return (
    <>
      <div className="Header">
        <div className="logo">heroesbook.</div>
        <div className="profile">
          <span>Meu perfil</span>
          <FaUserCircle size={24}/>
        </div>
      </div>
    </>
  );
}

export default Header;