import React from 'react';
import './App.css';
import Message from './Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React</h1>
        <Message text="Hello, this is a message passed as a prop!" />
      </header>
    </div>
  );
}
export default App;