import React, { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onCLick = () => {
    setName('');
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h3> Guest list </h3>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="button"> Add guest</button>
    </div>
  );
};

export default GuestList;
