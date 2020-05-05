import React from 'react';
import { useSelector } from 'react-redux';

/* --- Redux (state) --- */
import { selectCity } from '../../../slices/citySlice';

/* --- UI Components --- */
import Chart from '../../ui/Chart';

/* --- Custom style for Chart Component --- */
import stylesChart from '../../ui/Chart/chartStyles';

// Radar chart
const TempMaxChart = () => {
    const { cities } = useSelector(selectCity);

  const data = {
    labels: cities.map((eachCity) => eachCity.name),
    datasets: [
      {
        data: cities.map((eachCity) => eachCity.forecasts[0].tempMax),
        borderColor: stylesChart.color.solids.map(eachColor => eachColor),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    legend: {
        display: false
    }
}

  return (
    <section>
      <Chart title="Max Temperature" data={data} options={options} type="radar" />
    </section>
  );

}

export default TempMaxChart;