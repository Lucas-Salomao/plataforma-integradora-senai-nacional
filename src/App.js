import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import WidgetCard from './components/WidgetCard/WidgetCard';
import ChatBar from './components/ChatBar/ChatBar';
import BottomBar from './components/BottomBar/BottomBar';
import { ReactComponent as BackgroundSVG } from './gradient.svg';



function App() {
  return (
    <div className="App">
      <BackgroundSVG className="background" />
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
      <BottomBar />
    </div>
  );
}

export default App;
