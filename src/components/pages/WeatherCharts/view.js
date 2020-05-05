import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

/* --- Redux (state)--- */
import { addCity, selectCity } from '../../../slices/citySlice';

/* --- Views Components --- */
import SearchCityForm from '../../views/SearchCityForm';
import WindChart from '../../views/WindChart';
import TempMaxChart from '../../views/TempMaxChart';
import TempMinChart from '../../views/TempMinChart';
import CloudsChart from '../../views/CloudsChart';

/* --- Request Weather API ---- */
import { getForecastCity } from '../../../services/weatherAPI';

import './styles.scss';

const useStyles = makeStyles({
  card: {
    padding: '50px 20px',
  },
});

const WeatherCharts = () => {
  const dataStore = useSelector(selectCity);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    const getForecasts = async () => {
      try {
        let data = await Promise.all([
          await getForecastCity('Madrid'),
          await getForecastCity('London'),
          await getForecastCity('Barcelona'),
          await getForecastCity('Sidney'),

        ]);
        data.map(eachData => dispatch(addCity(eachData)));
      } catch (error) {
        console.log(error);
      }
    }
    getForecasts();
  }, []);

  return (
    <>
      <div className="WeatherCharts__form">
      <SearchCityForm />
      </div>
      {dataStore.cities.length > 0 ? (
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <WindChart />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <TempMaxChart/>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <div className="container">Hola</div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CloudsChart />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <TempMinChart/>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default WeatherCharts;
