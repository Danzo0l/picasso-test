import React from 'react';
import logo from './assets/img/logo.svg';

const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={logo} alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
