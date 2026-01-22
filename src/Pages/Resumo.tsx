import React from 'react';
import { useData } from '../Hooks/useContext';

const Resumo = () => {
  const { data } = useData();
  if (data === null) return;

  return (
    <section>
      <div className="rounded-[var(--spacing-padrao)] px-5 py-3 flex">
        <div className="box">
          <h1 className="font-bold text-cor1">Vendas</h1>
          <span className='font-bold'>
            {data
              .filter((item) => item.status === 'pago')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
        <div className="box">
          <h1 className="font-bold">Recebidos</h1>
          <span className='font-bold'>
            {data
              .filter((item) => item.status !== 'falha')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
        <div className="box">
          <h1 className="font-bold text-">Processando</h1>
          <span className='font-bold'>
            {data
              .filter((item) => item.status === 'processando')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
      </div>
      <div className="box">Gráficos</div>
    </section>
  );
};

export default Resumo;
