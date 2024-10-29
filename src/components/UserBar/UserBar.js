import React, { useState } from 'react';
import './UserBar.css'
import ButtomUserBar from '../ButtomUserBar/ButtomUserBar';


function UserBar() {
    const [darkMode, setDarkMode] = useState(false); // Começa com modo claro

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <div className={`UserBar ${darkMode ? 'dark' : 'light'}`}>
            {/* <ButtomUserBar icon="notifications_unread" /> */}
            <ButtomUserBar
                icon={darkMode ? 'light_mode' : 'dark_mode'}
                onClick={toggleDarkMode}
                
            />
            <ButtomUserBar icon="account_circle" link='https://identidade.senai.br/minha-conta' />
        </div>
    )
}

export default UserBar;