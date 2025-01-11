// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';

// let name = "Narendra singh "
// let age = "<b>19</b>"

function App() {
  return (
   <>
    <Navbar title = "NSINGH" about="About NSINGH"/> {/*this is props defining an elements*/}
    {/* <h1>Hello Noobs !</h1> */}
   
     <div className='container'>

    <TextForm heading = "Please fill the Given form"/>
     </div>

    </>
  );
}

export default App;
