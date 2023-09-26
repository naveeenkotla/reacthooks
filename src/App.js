import './App.css';
import { useState } from 'react';
function App() {
  let [count, setCount] = useState(0);

  return (
    <>
    <div className="newww">
    <div><h1>press to increase or decrese</h1></div>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>
        up
      </button>
      <hr></hr>
      <button onClick={() => setCount(count - 1)}>
        down
      </button>
    </div>
    </>
  );
}

export default App;
