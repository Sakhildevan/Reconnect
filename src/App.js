import './App.css';
import ContactUs from './Contact Us/contactus';
import Aboutus from './About Us/aboutus';
import Signup from './Signup/Signup';
import Login from './Login/login';
import Home from './Home/home';
function App() {
  return (
    <div className="App">
      <Aboutus />
      <ContactUs />
      <Signup />
      <Login />
      <Home />
    </div>
  );
}

export default App;
