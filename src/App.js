import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
   
    <div className="App">
     <Routes>
            <Route exact path="/" element={<Navbar />}>
              
            </Route>
            <Route path="/about" element={<AboutUs />}>
              
            </Route>
            <Route path="/contact" element={<ContactUs />}>
              
            </Route>
           
          </Routes>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
    </div>

  );
}

export default App;
