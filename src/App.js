import './App.css';
import ContactUs from './Contact Us/contactus';
import Aboutus from './About Us/aboutus';
import Signup from './Signup/Signup';
import Login from './Login/login';
import Home from './Home/home';
import Header from './Header/header';
function App() {
  return (
    <div className="App">
      <Aboutus />
      <ContactUs />
      <Signup />
      <Login />
      <Home />
      <Header />
    </div>
  );
}

export default App;
