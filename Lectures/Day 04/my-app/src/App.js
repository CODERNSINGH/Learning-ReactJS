// import logo from './logo.svg';
import './App.css';

let name = "Narendra singh "
let age = "<b>19</b>"
function App() {
  return (
   <div className="container">
    <h1>Hi there Narendra this Side</h1>
    <ul>
      <li>Home</li>
      <li>Contact</li>
      <li>Help</li>

    </ul>
    <h2>Hello mr {name}</h2>
    <h3>my age is {age}</h3>
   </div>
  );
}

export default App;
