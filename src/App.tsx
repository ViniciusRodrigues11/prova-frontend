import React from 'react';
import './App.css';
import Routes from './routes/index'
import { Header } from './components/header/index'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
