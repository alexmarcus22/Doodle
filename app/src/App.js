import logo from './logo.svg';
import './App.css';
import './sass/global.scss';
import { Header } from './shared/Header/index'
import { Home } from './components/Home/index'

function App() {
  return (
    <div>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
