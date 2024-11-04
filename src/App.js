import './styles/global.css'; 
import './App.css';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import WidgetCard from './components/WidgetCard/WidgetCard';
import ChatBar from './components/ChatBar/ChatBar';
import BottomBar from './components/BottomBar/BottomBar';



function App() {
  const [theme, setTheme] = useState('light');
  const [showChatBar, setShowChatBar] = useState(true);
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // Atualiza o data-theme no documento
    document.documentElement.setAttribute('data-theme', newTheme);
    // Atualiza o data-theme no App
    document.querySelector('.App').setAttribute('data-theme', newTheme);
  };

  // Garante que o tema inicial está correto
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelector('.App').setAttribute('data-theme', theme);
  }, []);

  return (
    <div className="App">
      <Header theme={theme} toggleTheme={toggleTheme} showChatBar={showChatBar}/>
      <div className="groupSaudacaoChatBar">
        <div className="saudacao">
          <div className="greeting">
            <h1>Olá, Lucas</h1>
            <p>Precisa de algo pra hoje?</p>
          </div>
          <div className="widgets">
            <WidgetCard text="Central de Carreira e Empregabilidade" icon="work" />
            <WidgetCard text="Plataforma de Aprendizagem" icon="factory" />
            <WidgetCard text="Teste sua Compreensão Linguística" icon="record_voice_over" />
          </div>
        </div>
        {showChatBar && <ChatBar />}
      </div>
      {/* <BottomBar /> */}
    </div>
  );
}

export default App;
