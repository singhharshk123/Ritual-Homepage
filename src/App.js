import './App.css';
import Navindex from './components/Navbar/Navindex';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './Home.js';
import Products from "./Products";


function App() {
  return (
    <div className="App">
    <Router>
    <Navindex /> 
    </Router>

    <Home />
    <Products />
   
    </div>
  );
}

export default App;
