
import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<SignUp />}></Route>
      </Routes>

    </div>
  );
}

export default App;
