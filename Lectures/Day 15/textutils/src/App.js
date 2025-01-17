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
  // Alert 
  const[alert,setalert] = useState(null)
  // so in bootstart we many type of alert and type is to convert to them
  const showalert = (massage,type) =>{
    setalert({
      msg: massage,
      type: type
    })

    // using alert till a timespan
    setTimeout(() => {
      setalert(null)
    }, 2000);

  }

  const [mode, setMode] = useState("light"); //wether dark mode is enlabled or not

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showalert("Dark Mode has Been enabled", "success")

      // change tittle
      // document.title = 'Textutils - Dark Mode'
      // setTimeout(() => {
      //   document.title = 'Textutils - Changing'
      // }, 1500);

      
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showalert("Light Mode has Been enabled", "success")
      document.title = 'Textutils - Light Mode'


    }
  }


  return (
    <>
    
      <Navbar title="NSINGH" about="About Us" mode={mode} togglemode={togglemode} /> 
      {/*this is props defining an elements*/}
      {/* <h1>Hello Noobs !</h1> */}
      <Alert alert={alert} />



      <div className='container'>

        <TextForm heading="Please fill the Given form" showalert={showalert}/>

        {/* <About className="container"/> */}
      </div>


    </>
  );
}

export default App;
