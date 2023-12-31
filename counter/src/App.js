import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0)
  let addValue = () => {
    if (counter >= 20) {
      setCounter(20)
    }
    else {
      setCounter(counter + 1)
    }

  };
  let removeValue = () => {
    if (!counter) {
      setCounter(0)
    }
    else {
      setCounter(counter - 1)
    }

  };
  return (
    <div className="App">
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add</button>
      {/* <br /> */}
      <button onClick={removeValue}>Remove</button>
    </div>
  );
}

export default App;
