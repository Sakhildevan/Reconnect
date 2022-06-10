import './App.css';
import ContactUs from './Contact Us/contactus';
import Aboutus from './About Us/aboutus';
import Signup from './Signup/Signup';
import Login from './Login/login';
import Home from './Home/home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/aboutus' element={<Aboutus />}></Route>
          <Route path='/contactus' element={<ContactUs />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
