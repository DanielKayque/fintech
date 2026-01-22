import React from 'react';
import { useData } from '../Hooks/useContext';
import VendaItem from '../Components/VendaItem';

const Vendas = () => {
  const { data } = useData();
  if (!data) return;
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <VendaItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default Vendas;
