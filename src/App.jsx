import { useState } from 'react';

const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Success is not in what you have, but who you are.",
  "Your limitation—it’s only your imagination.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it."
];

function App() {
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState(quotes[0]);

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome to webtests_redoff!</h1>
      <p>This is a simple example React component.</p>
      <div>
        <button onClick={() => setCount(count + 1)}>
          You clicked {count} times
        </button>
      </div>
      {/* Random Quote Generator Section */}
      <div style={{ marginTop: '2rem' }}>
        <h2>Random Quote Generator</h2>
        <blockquote style={{ fontStyle: 'italic', color: '#555' }}>
          "{quote}"
        </blockquote>
        <button onClick={getRandomQuote} style={{ marginTop: '1rem' }}>
          Show another quote
        </button>
      </div>
    </div>
  );
}

export default App;
