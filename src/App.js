import './App.css';
import Home from "./components/home"
import Navbar from './components/navbar';
import Cardsection from "./components/cardsection.js"

function App() {
  return (
    <div className="App">
     <Navbar />
      <Home />
      <Cardsection />
    </div>
  );
}

export default App;
