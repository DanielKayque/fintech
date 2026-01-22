import React from 'react';
import { type IData } from '../Hooks/useContext';
import { NavLink } from 'react-router-dom';

const VendaItem = ({ item }: { item: IData }) => {
  return (
    <div className="box mb-spacing-small grid grid-cols-[auto_auto_1fr] gap-spacing-padrao text-base">
      <NavLink to={item.id} className="font-mono text-inherit">
        {item.id}
      </NavLink>
      <span>{item.nome}</span>
      <span className="justify-self-end">
        {item.preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </span>
    </div>
  );
};

export default VendaItem;
