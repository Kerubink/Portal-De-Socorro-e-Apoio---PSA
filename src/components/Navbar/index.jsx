import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styles from './navbar.module.scss';
import logoHorizontal from '../../assets/logoHorizontal.png';
import Navbotton from './navbotton';

function Navbar() {
  const location = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 400px)' });


  useEffect(() => {
    const html = document.querySelector('html');
    const storedTheme = localStorage.getItem('hs_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const isLightOrAuto = storedTheme === 'light' || (storedTheme === 'auto' && !prefersDark);
    const isDarkOrAuto = storedTheme === 'dark' || (storedTheme === 'auto' && prefersDark);

    if (isLightOrAuto) {
      html.classList.remove('dark');
      html.classList.add('light');
    } else if (isDarkOrAuto) {
      html.classList.remove('light');
      html.classList.add('dark');
    }
    document.querySelector('.hs-dark-mode-active').classList.toggle('hidden', !isDarkOrAuto);
    document.querySelector('.hs-dark-mode-inactive').classList.toggle('hidden', isDarkOrAuto);
  }, []);

  const handleThemeSwitch = (theme) => {
    const html = document.querySelector('html');

    if (theme === 'dark') {
      html.classList.remove('light');
      html.classList.add('dark');
      localStorage.setItem('hs_theme', 'dark');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
      localStorage.setItem('hs_theme', 'light');
    }

    document.querySelector('.hs-dark-mode-active').classList.toggle('hidden', theme !== 'dark');
    document.querySelector('.hs-dark-mode-inactive').classList.toggle('hidden', theme === 'dark');
  };

  return (
    <>
      <header className={`${styles.header} flex flex-wrap backdrop-blur-sm sm:justify-start sm:flex-nowrap text-sm py-4 ${location.pathname === '/Doacoes' && isMobile ? styles.donationspage : ''}`}>
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
          <Link className={`${styles.logo} text-xl font-semibold dark:text-white overflow-hidden`} to="/">
            <img src={logoHorizontal} alt="Logomarca" />
          </Link>
          <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
            <Link className="font-medium" to="/">
              Inicio
            </Link>
            <Link className="font-medium" to="/Doacoes">
              Doar
            </Link>
            <button
              type="button"
              className="hs-dark-mode-inactive group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-neutral-400 dark:hover:text-neutral-500"
              onClick={() => handleThemeSwitch('dark')}
            >
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </button>
            <button
              type="button"
              className="hs-dark-mode-active hidden group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-neutral-400 dark:hover:text-neutral-500"
              onClick={() => handleThemeSwitch('light')}
            >
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {location.pathname === '/Doacoes' && isMobile && <Navbotton />}
    </>
  );
}

export default Navbar;
