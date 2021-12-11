import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { error, data, loading } = useTypedSelector((state) => state.repositories);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories();
  };

  return (
    <div>
      <h2> TEST REDUX SAGA </h2>
      <form action="" onSubmit={onSubmit}>
        <input type="text" />
        <button type="submit"> Search</button>
      </form>
      { error && (
      <h3>
        Error:
        { error }
      </h3>
      ) }
      { loading && <h3> Loading... </h3> }
      { !error && !loading && data.map((elem) => (
        <div key={elem}>
          { elem }
        </div>
      )) }
    </div>
  );
};

export default RepositoriesList;
