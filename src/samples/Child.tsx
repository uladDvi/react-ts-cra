interface ChildProps {
  color: string;
  onClick: () => void;
}

// export const Child = ({ color }: ChildProps) => <div> Hi </div>;

export const ChildAsFunc: React.FC<ChildProps> = ({ color, onClick, children }) => (
  <div>
    { color }
    <button type="button" onClick={onClick}> Click </button>
  </div>
);
