import './App.css';
import ContactUs from './Contact Us/contactus';
import Aboutus from './About Us/aboutus';
import Signup from './Signup/Signup';
import Login from './Login/login';
function App() {
  return (
    <div className="App">
      <Aboutus />
      <ContactUs />
      <Signup />
      <Login />
    </div>
  );
}

export default App;
