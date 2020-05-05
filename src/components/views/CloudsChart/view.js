import React from 'react';

import { useSelector } from 'react-redux';

/* --- Redux (state) --- */
import { selectCity } from '../../../slices/citySlice';

/* --- UI Components --- */
import Chart from '../../ui/Chart';

/* --- Custom style for Chart Component --- */
import stylesChart from '../../ui/Chart/chartStyles';

// Polar Area Chart
const CloudsChart = () => {
  const { cities } = useSelector(selectCity);

  const data = {
    labels: cities.map((eachCity) => eachCity.name),
    datasets: [
      {
        data: cities.map((eachCity) => eachCity.forecasts[0].clouds),
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
      <Chart title="Clouds" data={data} options={options} type="polarArea" />
    </section>
  );
};

export default CloudsChart;
