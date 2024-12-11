import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);

  const decrement = () => setCount((count) => count - 1);
  function memo(fn: Function) {
    const cache = new Map();
    return function (arg: any) {
      if (cache.has(arg)) {
        return cache.get(arg);
      }
      const result = fn(arg);
      cache.set(arg, result);
      return result;
    };
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>Count is {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <p>users</p>
    </>
  );
}

export default App;
