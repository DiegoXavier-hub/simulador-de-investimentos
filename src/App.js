import Home from './pages/Home'
import Simulador from './pages/Simulador'
import Investimentos from './pages/Investimentos'
import TradingViewWidget from "./pages/Graphs"
import Sobre from './pages/Sobre'
import Rodape from './pages/Rodape'
import './assets/css/app.css'


function App() {
  return (
    <main className="App">
      <Home/>
      <Simulador/>
      <Investimentos/>
      <TradingViewWidget/>
      <Sobre/>
      <Rodape/>
    </main> 
  );
}

export default App;
