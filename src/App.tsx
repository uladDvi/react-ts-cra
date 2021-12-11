import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './samples/Parent';
import GuestList from './samples/state/GuestLIst';
import UserSearch from './samples/state/UserSearch';
import RepositoriesList from './components/RepositoriesList';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Some text
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <UserSearch />
      <Parent />
      <GuestList />
      <RepositoriesList />
    </div>
  );
}

export default App;
