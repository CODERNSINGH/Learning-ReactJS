// import logo from './logo.svg';
import './App.css';

// let name = "Narendra singh "
// let age = "<b>19</b>"
function App() {
  return (
   <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Textutils</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Language
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">English</a></li>
                <li><a className="dropdown-item" href="/">Hindi</a></li>
                
              </ul>
            </li>
            
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <div className="card">
  <img src="..." className="card-img-top" alt="..."/>

  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div className="card" aria-hidden="true">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title placeholder-glow">
      <span className="placeholder col-6"></span>
    </h5>
    <p className="card-text placeholder-glow">
      <span className="placeholder col-7"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-6"></span>
      <span className="placeholder col-8"></span>
    </p>
    <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
  </div>
</div>
   
   </>
  );
}

export default App;
