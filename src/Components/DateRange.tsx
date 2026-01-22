import React, { useState } from 'react';
import Input from './Input';
import { useData } from '../Hooks/useContext';

const DateRange = () => {
  const { inicio, setInicio, final, setFinal } = useData();

  return (
    <form onSubmit={(event) => event.preventDefault()} className="box flex">
      <Input
        label="Início"
        id="inicio"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <Input
        label="Final"
        id="final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default DateRange;
