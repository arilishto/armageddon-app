import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Asteroids } from './pages/Asteroids';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<h1>Главная страница</h1>} />
            <Route path="/asteroids" element={<Asteroids />} />
            <Route path="/destruction" element={<h1>Страница уничтожения</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
