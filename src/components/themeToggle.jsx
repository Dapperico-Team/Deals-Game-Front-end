import React, { useContext } from 'react';
import Sun from '../asset/Sun.svg'
import Moon from "../asset/Moon.svg"
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className='p-2'>
      {theme === 'dark' ? (
        <div className='flex items-center cursor-pointer' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <img src={Sun} alt="lightmode" className='text-primary text-2xl mr-2' /> Light Mode
        </div>
      ) : (
        <div className='flex items-center cursor-pointer' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <img src={Moon} alt="darkmode" className='text-primary text-2xl mr-2' /> Dark Mode
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;