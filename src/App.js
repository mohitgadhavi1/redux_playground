import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import CounterCopy from "./features/counterCopy/CounterCopy";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Error from "./features/Error";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/counterCopy" element={<CounterCopy />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
