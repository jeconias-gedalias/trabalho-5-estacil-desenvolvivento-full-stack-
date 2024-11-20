import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

function App() {
  return (
    <Router>
      {/* Menu de navegação com BootStrap */}
      <nav className="navbar navbar-expand-sm navbar-light bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand text-primary" to="/">Livros</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-success" to="/">Catálogo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-danger" to="/dados">Novo</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Definindo as rotas com BrowserRouter */}
      <div className="container mt-5 p-3 border rounded shadow-lg">
        <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;