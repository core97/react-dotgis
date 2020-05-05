import React from 'react';
import { useSelector } from 'react-redux';

/* --- Redux (state) --- */
import { selectCity } from '../../../slices/citySlice';

/* --- UI Components --- */
import Chart from '../../ui/Chart';

/* --- Custom style for Chart Component --- */
import stylesChart from '../../ui/Chart/chartStyles';

// Bar chart
const TempMinChart = () => {
  const { cities } = useSelector(selectCity);

  const data = {
    labels: cities.map((eachCity) => eachCity.name),
    datasets: [
      {
        data: cities.map((eachCity) => eachCity.forecasts[0].tempMin),
        borderColor: stylesChart.color.solids.map((eachColor) => eachColor),
        backgroundColor: stylesChart.color.alphas.map((eachColor) => eachColor),
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: true,
          },
        },
      ],
    },
  };

  return (
    <section>
      <Chart
        title="Min Temperature"
        data={data}
        options={options}
        type="bar"
      />
    </section>
  );
};

export default TempMinChart;
