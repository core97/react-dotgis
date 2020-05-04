import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCity, selectCity } from '../../../slices/citySlice';

import { getForecastCity } from '../../../services/weatherAPI';

import './styles.scss';

const WeatherCharts = () => {
  const cities = useSelector(selectCity);
  const dispatch = useDispatch();

  useEffect(() => {
    const forecastCity = async () => {
      dispatch(addCity(await getForecastCity('Madrid')));
      dispatch(addCity(await getForecastCity('Bogota')));
    } 
    forecastCity()
  }, [dispatch]);

  return (
    <>
      <h2>Hello from Weather Charts</h2>
      {cities.length > 0 ? cities.map(item => <p>{item.name}</p>) : <p>Cargando ...</p>}
    </>
  );
};

export default WeatherCharts;
