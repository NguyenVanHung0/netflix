import './App.css';
import Home from '../Home/Home'
import Login from '../Login/Login'
import Registration from '../Registration/Registration'
import Regform from '../Regform/Regform'
import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup/registration' element={<Registration />} />
        <Route path='/signup/regform' element={<Regform />} />
      </Routes>
    </div>
  );
}

export default App;
