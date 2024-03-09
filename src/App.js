import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import Header from './components/header/Header'
import { Routes , Route } from 'react-router-dom'
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route Component={Home} path='/' exact />
        <Route Component={About} path='/about-us' exact />
        <Route Component={Contact} path='/contact-us' exact />
      </Routes>
    </div>
  );
}

export default App;