import React, { useState, FunctionComponent } from 'react';

const GuestList: FunctionComponent = () => {
  const [name, setName] = useState('');
  const [guest, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...guest, name]);
  };

  return (
    <div>
      <h3> Guest List </h3>
      <ul>
        { guest.map((guestItem) => (
          <li
            key={guestItem}
          >
            { guestItem }
          </li>
        )) }
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="button" onClick={onClick}> Add guest</button>
    </div>
  );
};

export default GuestList;
