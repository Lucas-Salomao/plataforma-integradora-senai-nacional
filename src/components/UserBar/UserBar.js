import React, { useState } from 'react';
import './UserBar.css'
import ButtomUserBar from '../ButtomUserBar/ButtomUserBar';


function UserBar({ theme, toggleTheme, isOpen }) {
    return (
        <div className={`UserBar ${theme} ${isOpen ? 'open' : 'closed'}`}>
            {/* <ButtomUserBar icon="notifications_unread" /> */}
            <ButtomUserBar
                icon={theme === 'dark' ? 'light_mode' : 'dark_mode'}
                onClick={toggleTheme}
            />
            <ButtomUserBar icon="account_circle" link='https://identidade.senai.br/minha-conta' />
        </div>
    )
}

export default UserBar;