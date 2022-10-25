import React, { useState, useEffect } from 'react';
import Header from './routes/header/Header'
import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  },[])

  return (
    <div className="app">
      {loading ? (
          <div className='app-modal'>
            <h1>CARGANDO...</h1>
          </div>
        )
        : (
          <div>
            <div className="app-navbar">
              <Navbar />
            </div>
            <div className="app-header">
              <Header />
            </div>
            <div className="app-header">
              <Header />
            </div>
          </div>
        )
      }
    </div>
  );
}

export default App;
