import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { IData } from '../Hooks/useContext';

type IFormatado = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function transformData(data: IData[]): IFormatado[] {
  const dias = data.reduce((acc: { [key: string]: IFormatado }, item) => {
    const dia = item.data.split(' ')[0];

    if (!acc[dia]) {
      acc[dia] = {
        data: dia.substring(5),
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[dia][item.status] += item.preco;
    return acc;
  }, {});
  return Object.values(dias);
}

const Graficos = ({ data }: { data: IData[] }) => {
  const transformedData = transformData(data);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={transformedData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        {/* <CartesianGrid strokeDasharray="4 4" vertical={true} /> */}
        <XAxis dataKey="data" fontSize="16px" />
        <YAxis fontSize="16px" />

        <Tooltip
          formatter={(value: number | undefined) =>
            value !== undefined &&
            value.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
          }
        />
        <Legend />
        <Area
          type="monotone"
          dataKey="falha"
          stackId="1"
          stroke="#ff0000"
          fill="#ff0000"
          strokeWidth={3}
        />
        <Area
          type="monotone"
          dataKey="pago"
          stackId="1"
          stroke="#82ca9d"
          strokeWidth={3}
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="processando"
          stackId="1"
          stroke="yellow"
          strokeWidth={3}
          fill="yellow"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Graficos;
