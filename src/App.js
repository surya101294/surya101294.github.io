import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Project from './Components/Project';
import  Calender  from './Components/Calender';
import Skill from './Components/Skill';
import CustomizedTimeline from './Components/Timeline';
// import Stats from './Components/Stats'

function App() {
  return (
    <div className="App">
     <Navbar /> 
     <Home/>
    <About/>
    {/* <CustomizedTimeline/> */}
    <Project/>
    <Skill/>
    <Contact/>
    <Footer/> 
    </div>
  );
}
export default App;
