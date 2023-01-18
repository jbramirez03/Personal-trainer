import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/services';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Hero />}>

        </Route>
        <Route path='/testimonial'></Route>
      </Routes>
    </Router>
  );
}

export default App;
