// import logo from './logo.svg';
// import './App.css';

// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }

// function AboutPage() {
//   return (
//     <>
//       <h1>About This Page</h1>
//       <p>Hello there.<br />i am the who is writing all of these nonsence</p>
//     </>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
//         <h1>Now it's Under Control </h1>

//         <p>
//           Yah! it's Normal css
//         </p>
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//         <h2>Hello How are You me whose the bose</h2>
//         <button>Submit</button>
//       </header>
//     </div>
//   );
// }

// // Adding New Page 


// // export default App;
// export default AboutPage;
// export default MyButton;

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <p>Hi is this page Loaded i am Narendra Singh Owner of this Page</p>
      <h3>Hi i am making this Frame Work </h3>
      <MyButton />
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
// export default AboutPage;