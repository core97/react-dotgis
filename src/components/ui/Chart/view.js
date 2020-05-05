import React from 'react';
import { Doughnut, Radar, Polar, Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

import './styles.scss';

const Chart = ({ title = '', data, options, type }) => {
  let chart;

  if(type === 'doughnut') {
    chart = (<Doughnut data={data} options={options}/>);
  } else if(type === 'bar') {
    chart = (<Bar data={data} options={options}/>);
  } else if(type === 'radar') {
    chart = (<Radar data={data} options={options}/>);
  } else if(type === 'polarArea') {
    chart = (<Polar data={data} options={options}/>);
  }

  return (
    <figure>
      <h3>{title}</h3>
      {chart}
    </figure>
  );
};

Chart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.exact({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    datasets: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  options: PropTypes.object,
  type: PropTypes.string.isRequired,
};

export default Chart;
