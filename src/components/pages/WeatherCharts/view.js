import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

/* --- Redux (action and state)--- */
import { addCity, selectCity } from '../../../slices/citySlice';

/* --- Request Weather API ---- */
import { getForecastCity } from '../../../services/weatherAPI';

import './styles.scss';

const WeatherCharts = () => {
  const cities = useSelector(selectCity);
  const dispatch = useDispatch();

  useEffect(() => {
    const forecastCity = async () => {
      dispatch(addCity(await getForecastCity('Madrid')));
      dispatch(addCity(await getForecastCity('Bogota')));
    };
    // forecastCity()
  }, [dispatch]);

  return (
    <>
      <Grid container spacing={8}>
        <Grid item xs={12} md={6}>
          <Card>
            <div className="container">Hola</div>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <div className="container">Hola</div>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <div className="container">Hola</div>
          </Card>
        </Grid>
      </Grid>
      {cities.length > 0 ? (
        cities.map((item) => <p>{item.name}</p>)
      ) : (
        <p>Cargando ...</p>
      )}
    </>
  );
};

export default WeatherCharts;
