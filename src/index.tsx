import React from 'react';
import ReactDOM from 'react-dom';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';

const App = () => (
  <div>
    <GuestList />
    <UserSearch />
    <EventComponent />
  </div>
);

ReactDOM.render(
  <App />,
  document.querySelector('#root'),
);
