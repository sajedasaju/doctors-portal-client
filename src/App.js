
import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
