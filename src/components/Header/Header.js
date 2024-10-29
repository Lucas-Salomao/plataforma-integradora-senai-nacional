import './Header.css';
import UserBar from '../UserBar/UserBar';


function Header() {
    return (
        <div class="header">
            <img src="/img/logo.svg" alt="Logo Senai Nacional" />
            <div class='div-user-bar'>
                <UserBar />
                <div class='avatar'>
                    <img src="/img/avatar.svg" alt="Avatar" />
                </div>
            </div>


        </div>
    )
}

export default Header;