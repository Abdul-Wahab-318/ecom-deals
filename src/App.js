import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import Header from './components/header/Header'
import { Routes , Route } from 'react-router-dom'
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Stories from './pages/stories/Stories';
import Package from './pages/package/Package';
import Footer from './components/footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route Component={Home} path='/' exact />
        <Route Component={About} path='/about-us' exact />
        <Route Component={Contact} path='/contact-us' exact />
        <Route Component={Stories} path='/stories' exact />
        <Route Component={Package} path='/package/:id' exact />
      </Routes>
      <Footer/>
      <ScrollToTop />
    </div>
  );
}

export default App;
