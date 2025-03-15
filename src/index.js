import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './Context';
import Footer from './Footer';
<<<<<<< Updated upstream:src/index.js


=======
>>>>>>> Stashed changes:src/index.jsx

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App/>
      <Footer/>
    </AppProvider>
  </React.StrictMode>
);

reportWebVitals();
