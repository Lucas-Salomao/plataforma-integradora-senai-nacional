import './Header.css';
import UserBar from '../UserBar/UserBar';


function Header({ theme, toggleTheme }) {
    return (
        <div className="header">
            <img className='logo' alt="Logo Senai Nacional" />
            <div className='div-user-bar'>
                <UserBar theme={theme} toggleTheme={toggleTheme} />
                <div className='avatar'>
                    <img src="/img/avatar.svg" alt="Avatar" />
                </div>
            </div>
        </div>
    )
}

export default Header;