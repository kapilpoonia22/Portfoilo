import './App.css';
import About from './Components/About/About';
import Hero from './Components/Hero/Hero';
import MyWork from './Components/MyWork/MyWork';
import Navbar from './Components/Navbar/Navbar';
import Service from './Components/Services/Service';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="">
    <Navbar/>
    <Hero/>
    <About/>
    <Service/>
    <MyWork/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
