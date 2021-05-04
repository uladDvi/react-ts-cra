import React, { FunctionComponent } from 'react';

const EventComponent: FunctionComponent = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('event', event);
  };

  return (
    <div>
      <input type="text" onChange={onChange} />
      <div draggable onDragStart={onDragStart}> Drag me </div>
    </div>
  );
};

export default EventComponent;
