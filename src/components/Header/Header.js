import './Header.css';
import UserBar from '../UserBar/UserBar';
import { useState } from 'react';
import TextButtom from '../TextButtom/TextButtom';

function Header({ theme, toggleTheme, showChatBar }) {
    const [isUserBarOpen, setIsUserBarOpen] = useState(false);

    const toggleUserBar = () => {
        setIsUserBarOpen(!isUserBarOpen);
    };

    return (
        <div className="header">
            <img className='logo' alt="Logo Senai Nacional" />
            <div className='div-user-bar'>
                {!showChatBar ? (
                    <div className='buttomsLogin'>
                        <TextButtom texto="Login" buttonColor="var(--cor-de-fundo-icon-bottom-bar-default)" textColor="var(--cor-icon-bottom-bar-default)" link='https://identidade.senai.br/cadastro' />
                        <TextButtom texto="Cadastrar" buttonColor="var(--Brand-Orange-500)" textColor="var(--Neutral-Neutral-0)" link='https://identidade.senai.br/authenticationendpoint/login.do?RelayState=https%3A%2F%2Fmeusenai.senai.br%2F&commonAuthCallerPath=%2Fsamlsso&forceAuth=false&passiveAuth=false&tenantDomain=carbon.super&sessionDataKey=729d99fd-749a-4abd-b3ff-89140061c5af&relyingParty=https%3A%2F%2Fmeusenai.senai.br&type=samlsso&sp=meusenai.senai.br&isSaaSApp=false&authenticators=BasicAuthenticator%3ALOCAL' />
                    </div>
                ) : (
                    <div className='avatar' onClick={toggleUserBar}>
                        <img src="/img/avatar.svg" alt="Avatar" />
                    </div>
                )}
                <UserBar theme={theme} toggleTheme={toggleTheme} isOpen={isUserBarOpen} />
            </div>
        </div>
    )
}

export default Header;
