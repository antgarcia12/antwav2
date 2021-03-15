import React, { useState } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Cards />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
