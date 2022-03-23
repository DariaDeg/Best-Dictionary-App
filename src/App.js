import logo from "./logo.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App- img-fluid" alt="logo" />

        <a href="#" className="btn btn-primary">
          Hello
        </a>
      </header>
    </div>
  );
}

App();
