// App.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from './redux/store'; // Import RootState as a default export
import { fetchAiData } from './services/api';
import { setAiData,SetAiDataAction } from './redux/actions';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import PlatformDistributionChart from './components/PlatformDistributionChart';
import CountryDistributionChart from './components/CountryDistributionChart';
import { ThunkDispatch } from '@reduxjs/toolkit'; // Import ThunkDispatch

const App: React.FC = () => {
  // Define dispatch with correct type
  const dispatch: ThunkDispatch<RootState, void, SetAiDataAction> = useDispatch();
  const aiData = useSelector((state: RootState) => state.aiData.data);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAiData();
      dispatch(setAiData(data));
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      {aiData && (
        <>
          <div className="chart-container">
            <BarChart data={aiData.category_distribution} />
          </div>
          <div className="chart-container">
            <LineChart data={aiData.response_times} />
          </div>
          <div className="chart-container">
            <PieChart data={aiData.user_satisfaction} />
          </div>
          <div className="chart-container">
            <PlatformDistributionChart data={aiData.usage_statistics.by_platform} />
          </div>
          <div className="chart-container">
            <CountryDistributionChart data={aiData.usage_statistics.by_country} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
