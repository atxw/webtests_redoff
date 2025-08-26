import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Success is not in what you have, but who you are.",
  "Your limitation—it’s only your imagination.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it."
];

function App() {
  const [count, setCount] = useState(0)

  const [quote, setQuote] = useState(quotes[0]);

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Random Quote Generator</h1>
        <blockquote style={{ fontStyle: 'italic', color: '#555' }}>
          "{quote}"
        </blockquote>
        <button onClick={getRandomQuote} style={{ marginTop: '1rem' }}>
          Show another quote
        </button>
      </div>
    </>
  )
}

export default App
