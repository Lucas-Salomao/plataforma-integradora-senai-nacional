import React, { useState } from 'react';
import './UserBar.css'
import ButtomUserBar from '../ButtomUserBar/ButtomUserBar';


function UserBar({ theme, toggleTheme }) {
    return (
        <div className={`UserBar ${theme}`}>
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