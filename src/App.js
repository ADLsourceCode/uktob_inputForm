import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputString, setInputString] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [outputText, setOutputText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputString || !inputNumber) {
      setError('Please enter both a string and a number.');
      return;
    }

    if (isNaN(inputNumber)) {
      setError('Please enter a valid number.');
      return;
    }

    const repeatedString = inputString.repeat(Number(inputNumber));
    setOutputText(repeatedString);
    setError('');
  };

  return (
    <div className="App">
       <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="stringInput">Enter a string: </label>
          <input
            id="stringInput"
            type="text"
            value={inputString}
            onChange={(e) => setInputString(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="numberInput">Enter a number: </label>
          <input
            id="numberInput"
            type="text"
            value={inputNumber}
            onChange={(e) => setInputNumber(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
      {outputText && <p>{outputText}</p>}
    </div>
  );
}

export default App;
