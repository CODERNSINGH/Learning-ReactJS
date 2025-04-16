import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainpage from './Homepage/Mainpage'
import PremiumNavBar from './components/PremiumNavBar'



function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="App">
    <PremiumNavBar/>
    <Mainpage/>
   </div>
  )
}

export default App
