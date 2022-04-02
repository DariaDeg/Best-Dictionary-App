import React from "react";
import Dictionary from "./Dictionary";
import logo from "./logo.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="word" />
        </main>
        <footer className="App-footer">
          <small>Coded by DariaDeg</small>
        </footer>
      </div>
    </div>
  );
}

App();
