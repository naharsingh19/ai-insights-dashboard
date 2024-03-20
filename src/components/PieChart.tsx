import React from 'react';
import { PieChart as RePieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Props {
  data: { ratings: { rating: number; count: number }[] };
}

const PieChart: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RePieChart>
        <Pie dataKey="count" data={data.ratings} nameKey="rating" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
        <Tooltip />
        <Legend />
      </RePieChart>
    </ResponsiveContainer>
  );
};

export default PieChart;
