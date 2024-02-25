import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import Header from './components/header/Header'
import { Routes , Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route Component={Home} path='/' exact />
      </Routes>
    </div>
  );
}

export default App;
