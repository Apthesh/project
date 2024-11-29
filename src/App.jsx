// import  from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import First from './components/First/First';
import Second from './components/Second/Second';
import Third from './components/Third/Third';
import Fourth from './components/Fourth/Fourth';
import Fifth from './components/Fifth/Fifth';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <First />
      </main>
      <main>
        <Second/>
      </main>
      <main>
        <Third/>
      </main>
      <main>
        <Fourth/>
      </main>
      <Fifth/>
    </div>
  );
}

export default App;