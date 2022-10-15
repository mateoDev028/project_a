import Header from './routes/header/Header'
import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="app">
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
  );
}

export default App;
