import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CoasterSpinner from "./components/coasterSpinner";

function App() {
  return (
    <div className="App">
      <header>
        <div class="center">
          <div class="container">
            <div class="item">
              <CoasterSpinner />
            </div>
            <div class="item spinner-text">
              <p>In development</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
