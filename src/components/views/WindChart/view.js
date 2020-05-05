import React from 'react';
import { useSelector } from 'react-redux';

import { selectCity } from '../../../slices/citySlice';

import Chart from '../../ui/Chart';

import stylesChart from '../../ui/Chart/chartStyles';

// Doughnut Chart
const WindChart = () => {
  const dataStore = useSelector(selectCity);
  const { cities, timeframe } = dataStore;

  const data = {
    labels: cities.map((eachCity) => eachCity.name),
    datasets: [
      {
        data: cities.map((eachCity) => eachCity.forecasts[0].wind),
        borderColor: stylesChart.color.solids.map(eachColor => eachColor),
        backgroundColor: stylesChart.color.alphas.map(eachColor => eachColor),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    legend: {
      position: 'right',
    },
  };

  return (
    <section>
      <Chart title="Wind" data={data} options={options} type="doughnut" />
    </section>
  );
};

export default WindChart;
