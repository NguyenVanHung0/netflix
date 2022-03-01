import './App.css';
import Home from '../Home/Home'
import Login from '../Login/Login'
import Registration from '../Registration/Registration'
import Regform from '../Regform/Regform'
import SignUp from '../SignUp/SignUp'
import PlanForm from '../PlanForm/PlanForm'
import Payment from '../Payment/Payment'
import Creditoption from '../Creditoption/Creditoption'
import BrowserHome from '../Browser/BrowserHome/BrowserHome'
import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' exact element={<SignUp />} />
        <Route path='/signup/registration' element={<Registration />} />
        <Route path='/signup/regform' element={<Regform />} />
        <Route path='/signup/payment' element={<Payment />} />
        <Route path='/signup/planform' element={<PlanForm />} />
        <Route path='/signup/creditoption' element={<Creditoption />} />
        <Route path='/browser' element={<BrowserHome />} />
      </Routes>
    </div>
  );
}

export default App;
