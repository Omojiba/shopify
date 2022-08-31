import './App.css';
import { BrowserRouter as Router, Routes, Route, Redirect} from "react-router-dom";
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='cart' element={<Cart />} />
      </Routes> 
      </Router>
    </div>
  );
}

export default App;
