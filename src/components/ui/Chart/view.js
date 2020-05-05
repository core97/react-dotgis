import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Chartjs from 'chart.js';

import './styles.scss';

const Chart = ({ title = '', data, options, type }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    new Chartjs(chartRef.current, { type, data, options });
  }, [data, options, type]);

  return (
    <figure>
      <h3>{title}</h3>
      <canvas ref={chartRef}/>
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
  type: PropTypes.string.isRequired
};

export default Chart;
