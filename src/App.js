import './styles/global.css'; 
import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes'; 
import Header from './components/Header/Header';
import WidgetCard from './components/WidgetCard/WidgetCard';
import ChatBar from './components/ChatBar/ChatBar';
import BottomBar from './components/BottomBar/BottomBar';



function App() {
  return (
    <div className="App">
      <Header />
      <div class="groupSaudacaoChatBar">
        <div class="saudacao">
          <div class="greeting">
            <h1>Olá, Lucas</h1>
            <p>Precisa de algo pra hoje?</p>
          </div>
          <div class="widgets">
            <WidgetCard text="Central de Carreira e Empregabilidade" icon="work" />
            <WidgetCard text="Plataforma de Aprendizagem" icon="factory" />
            <WidgetCard text="Teste sua Compreensão Linguística" icon="record_voice_over" />
          </div>
        </div>
        <ChatBar />
      </div>
      {/* <BottomBar /> */}
    </div>
  );
}

export default App;
