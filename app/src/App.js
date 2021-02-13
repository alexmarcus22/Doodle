import logo from './logo.svg';
import './App.css';
import './sass/global.scss';
import { Home } from './components/Home/index'
import { Header } from './shared/Header/index'

function App() {
  return (
    <div>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
