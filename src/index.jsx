import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { AppProvider } from './Context';
import Footer from './Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App/>
      <Footer />
    </AppProvider>
  </React.StrictMode>
);

