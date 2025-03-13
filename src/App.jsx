import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio';
import Curiosidades from './pages/curiosidades';
import Personajes from './pages/personajes';
import Navbar from './components/navbar';
import Footer from './components/footer';

import './App.css'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/curiosidades" element={<Curiosidades />} />
        <Route path="/personajes" element={<Personajes />} />
      </Routes>
      <Footer/>
    </Router>     
        )
}

export default App
