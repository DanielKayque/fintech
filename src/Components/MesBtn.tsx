import React from 'react';
import { useData } from '../Hooks/useContext';

const MesBtn = ({ n }: { n: number }) => {
  const { setInicio, setFinal } = useData();

  function formatDate(date: Date) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    return `${year}-${mm}-${dd}`;
  }

  function nomesMes(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);
    return new Intl.DateTimeFormat('pt-BR', {
      month: 'long',
    }).format(date);
  }
  nomesMes(n);

  function setMes(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setInicio(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  }

  return (
    <button className="capitalize bg-cor3 p-padrao rounded-[var(--spacing-padrao)] font-semibold" onClick={() => setMes(n)}>
      {nomesMes(n)}
    </button>
  );
};

export default MesBtn;
