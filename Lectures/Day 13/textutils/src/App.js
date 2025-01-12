// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';


// let name = "Narendra singh "
// let age = "<b>19</b>"

function App() {

  const [mode, setMode] = useState("light"); //wether dark mode is enlabled or not

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'white'


    }
  }


  return (
    <>
      <Navbar title="NSINGH" about="About Us" mode={mode} togglemode={togglemode} /> {/*this is props defining an elements*/}
      {/* <h1>Hello Noobs !</h1> */}



      <div className='container'>

        <TextForm heading="Please fill the Given form" />

        {/* <About className="container"/> */}
      </div>


    </>
  );
}

export default App;
