import { Line, LineChart, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useAppSelector } from '@/hooks/redux';
import { selectors } from '@/store/priceHistorySlice';

const Chart = () => {
  const data = useAppSelector(selectors.selectPriceHistory);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data.map((e) => ({ ...e, time: new Date(e.time).toLocaleTimeString() }))}>
        <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
        <XAxis dataKey="time" />
        <YAxis />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
