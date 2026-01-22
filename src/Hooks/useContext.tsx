import { createContext, useContext, useState } from 'react';
import useFetch from './useFetch';

const GlobalContext = createContext<IDataContext | null>(null);

export type IData = {
  id: string;
  nome: string;
  preco: number;
  status: 'processando' | 'pago' | 'falha';
  pagamento: 'boleto' | 'pix' | 'cartao';
  parcelas: number | null;
  data: string;
};

type IDataContext = {
  data: IData[] | null;
  loading: boolean;
  error: string | null;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
};

export function useData() {
  const context = useContext(GlobalContext);
  if (!context) throw new Error('Envolva no Provider');
  return context;
}

export const GlobalStorage = ({ children }: React.PropsWithChildren) => {
  function getDate(n: number) {
    const date = new Date();
    date.setDate(date.getDate() - n);
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    return `${year}-${mm}-${dd}`;
  }

  const [inicio, setInicio] = useState(getDate(14));
  const [final, setFinal] = useState(getDate(0));

  const { data, loading, error } = useFetch<IData[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`,
  );

  return (
    <GlobalContext.Provider
      value={{ data, loading, error, inicio, setInicio, final, setFinal }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
