import React, { useEffect, useState } from 'react';
import { useData } from '../Hooks/useContext';
import DateRange from './DateRange';
import Meses from './Meses';
import Title from './Title';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [title, setTitle] = useState('');
  const { data, loading, error } = useData();
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case '/':
        setTitle('Resumo');
        document.title = 'Fintech | Resumo'
        break;
      case '/vendas':
        setTitle('Vendas');
        document.title = 'Fintech | Vendas'

    }
  }, [pathname]);

  return (
    <header className="">
      <div className="mb flex">
        <DateRange />
        <Title title={title} />
      </div>
      <Meses />
    </header>
  );
};

export default Header;
