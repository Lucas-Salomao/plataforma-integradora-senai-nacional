import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import WidgetCard from './components/Widgets/WidgetCard';


function App() {
  return (
    <div className="App">
      <Header />
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

    </div>
  );
}

export default App;
