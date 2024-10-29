import './Header.css';
import UserBar from '../UserBar/UserBar';
import { useState } from 'react';


function Header({ theme, toggleTheme }) {
    const [isUserBarOpen, setIsUserBarOpen] = useState(false);

    const toggleUserBar = () => {
        setIsUserBarOpen(!isUserBarOpen);
    };

    return (
        <div className="header">
            <img className='logo' alt="Logo Senai Nacional" />
            <div className='div-user-bar'>
                <UserBar theme={theme} toggleTheme={toggleTheme} isOpen={isUserBarOpen}/>
                <div className='avatar' onClick={toggleUserBar}>
                    <img src="/img/avatar.svg" alt="Avatar" />
                </div>
            </div>
        </div>
    )
}

export default Header;