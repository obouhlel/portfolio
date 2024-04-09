import React, { useState, useRef, useEffect } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import ThemeToggleButton from './theme.jsx';
import clsx from 'clsx';

function Header({ isDarkMode, toggleTheme }) {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navRef]);

    const headerClass = clsx(
        'fixed top-0 left-0 w-full h-16 border-b border-solid',
        'flex flex-row items-center justify-between px-4 sm:px-8',
        'transition-background-color duration-300',
        isDarkMode ? 'bg-dark-ui-elt-bg' : 'bg-light-ui-elt-bg',
        isDarkMode ? 'border-dark-ui-elt-border' : 'border-light-ui-elt-border'
    );

    const iconClass = clsx(
        'h-8 w-8 m-4 rounded border border-solid',
        isDarkMode ? 'text-dark-high-contrast-text hover:text-dark-low-contrast-text' : 'text-light-high-contrast-text  hover:text-light-low-contrast-text',
        isDarkMode ? 'border-dark-ui-elt-border' : 'border-light-ui-elt-border',
        isDarkMode ? 'bg-dark-app-bg hover:bg-dark-subtle-bg' : 'bg-light-app-bg hover:bg-light-subtle-bg',
    );

    const menuListClass = clsx(
        'fixed top-16 left-0 sm:top-0 w-full h-auto sm:w-auto sm:h-16',
        'overflow-y-auto flex flex-col items-center text-center sm:flex-row',
        'transition-all duration-300 ease-in-out',
        isOpen ? 'flex' : 'hidden sm:flex',
        isDarkMode ? 'bg-dark-ui-elt-bg sm:bg-transparent' : 'bg-light-ui-elt-bg sm:bg-transparent',
        isDarkMode ? 'border-b border-dark-ui-elt-border sm:border-b-0' : 'border-b border-light-ui-elt-border sm:border-b-0',
    );

    const menuEltClass = clsx(
        'h-full w-full sm:w-auto px-4 py-4',
        'text-lg font-semibold',
        isDarkMode ? 'text-dark-high-contrast-text hover:text-dark-low-contrast-text' : 'text-light-high-contrast-text hover:text-light-low-contrast-text',
        isDarkMode ? 'hover:bg-dark-hover-ui-elt-bg' : 'hover:bg-light-hover-ui-elt-bg',
        isDarkMode ? 'active:bg-dark-active-ui-elt-bg' : 'active:bg-light-active-ui-elt-bg',
        isDarkMode ? 'sm:border-b-0 border-b border-dark-ui-elt-border sm:hover:border-b' : 'sm:border-b-0 border-b border-light-ui-elt-border sm:hover:border-b',
        'last:border-b-0',
    );

    return (
        <>
            <header className={headerClass}>
                <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden">
                    {isOpen ? <XIcon className={iconClass} /> : <MenuIcon className={iconClass} />}
                </button>
                <ThemeToggleButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            </header>
            <nav ref={navRef} className={menuListClass}>
                <a className={menuEltClass} href="#home">
                    Home
                </a>
                <a className={menuEltClass} href="#about-me">
                    About Me
                </a>
                <a className={menuEltClass} href="#skills">
                    Skills
                </a>
                <a className={menuEltClass} href="#projects">
                    Projects
                </a>
                <a className={menuEltClass} href="#contact">
                    Contact
                </a>
            </nav>
        </>
    );
}

export default Header;
