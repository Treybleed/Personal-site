import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CoasterSpinner from "./components/coasterSpinner";

function App() {
  return (
    <div className="App">
      <header>
        <div className="center">
          <div className="container">
            <div className="item">
              <CoasterSpinner />
            </div>
            <div className="item spinner-text">
              <p>In development</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
