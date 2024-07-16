import React, { useState } from 'react';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Toggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const themeToggle = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark_theme');
    };
    return (
        <>
        <button  className='toogleBtn' onClick={themeToggle}>
        {
            !isDarkMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />
        }
        </button>            
        </>
    )
}

export default Toggle;