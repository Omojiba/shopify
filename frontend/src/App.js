import './App.css';
import { BrowserRouter as Router, Routes, Route, Redirect} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
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
