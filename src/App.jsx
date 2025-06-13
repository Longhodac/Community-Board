// src/App.jsx
import React, { useState } from 'react'
import Board from "./components/Board.jsx"          // ← points at src/Board.jsx
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <div className="logo-container">
        <a href="https://vite.dev" target="_blank" rel="noopener">
          <img src={viteLogo}  className="logo"       alt="Vite logo"  />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
      </div>

      <h1>San Diego's Best Food Spots for College Students</h1>
      <Board />

      <div className="card">
        <button onClick={() => setCount(c => c + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
