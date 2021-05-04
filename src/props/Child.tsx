import React, { FunctionComponent } from 'react';

interface ChildProps {
    color: string
    onClick: () => void
}

export const Child = ({ color, onClick }: ChildProps) => (
  <div>
    { color }
    <button type="button" onClick={onClick}> Click me </button>
  </div>
);

export const ChildAsFC: FunctionComponent<ChildProps> = ({ color, onClick }) => (
  <div>
    { color }
    <button type="button" onClick={onClick}> Click me </button>
  </div>
);
