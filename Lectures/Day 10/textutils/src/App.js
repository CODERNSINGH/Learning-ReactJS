// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import About from './components/About';

// let name = "Narendra singh "
// let age = "<b>19</b>"

function App() {
  return (
   <>
    <Navbar title = "NSINGH" about="About Us"/> {/*this is props defining an elements*/}
    {/* <h1>Hello Noobs !</h1> */}
   
     <div className='container'>

    <TextForm heading = "Please fill the Given form"/>
    <About className="container"/>
     </div>

    </>
  );
}

export default App;
