import './App.css';
import Home from "./components/home"
import Navbar from './components/navbar';
import Cardsection from "./components/cardsection.js"
import Hometest from "./components/hometest"

function App() {
  return (
    <div className="App">
     <Navbar />
      {/* <Home /> */}
      <Hometest />
      <Cardsection />
    </div>
  );
}

export default App;
