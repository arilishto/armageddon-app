import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Asteroids } from './pages/Asteroids';
import { Destruction } from './pages/Destruction';
import { Asteroid } from './pages/Asteroid';
import { AsteroidsContextProvider } from './components/asteroids-context/AsteroidsContext';


const router = createBrowserRouter([
  {
    path: "/asteroids",
    element: <Asteroids />,
  },

  {
    path: "/destruction",
    element: <Destruction />,
  },

  {
    path: "/asteroid/:id",
    element: <Asteroid />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AsteroidsContextProvider>
      <RouterProvider router={router} />
    </AsteroidsContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
