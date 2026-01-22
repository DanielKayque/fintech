import React from 'react';
import { useData, type IData } from '../Hooks/useContext';
import { useLocation, useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import Loading from '../Components/Loading';

type INoData = Omit<IData, 'data'>;

const Venda = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<INoData>(
    `https://data.origamid.dev/vendas/${id}`,
  );
  if (loading) return <Loading />;
  if (!data) return;
  return (
    <div className='text-base'>
      <p className="box mb-spacing-small">ID: {data.id}</p>
      <p className="box mb-spacing-small">Nome: {data.nome}</p>
      <p className="box mb-spacing-small">Preço {data.preco}</p>
      <p className="box mb-spacing-small">Status: {data.status}</p>
      <p className="box mb-spacing-small">Pagamento: {data.pagamento}</p>
    </div>
  );
};

export default Venda;
