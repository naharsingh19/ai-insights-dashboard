import React from 'react';
import { BarChart as ReBarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

interface Props {
  data: { [key: string]: number };
}

const BarChart: React.FC<Props> = ({ data }) => {
  const chartData = Object.keys(data).map((key) => ({ name: key, value: data[key] }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ReBarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </ReBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;


