import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { Asteroids } from './pages/Asteroids';
import { Destruction } from './pages/Destruction';
import { Asteroid } from './pages/Asteroid';
import { AsteroidsContextProvider } from './components/asteroids-context/AsteroidsContext';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AsteroidsContextProvider>
      <HashRouter>
        <div className="App">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Navigate to="/asteroids" replace />} />
              <Route path="/asteroids" element={<Asteroids />} />
              <Route path="/destruction" element={<Destruction />} />
              <Route path="/asteroid/:id" element={<Asteroid />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </AsteroidsContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
