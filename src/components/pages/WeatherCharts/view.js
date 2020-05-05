import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

/* --- Redux (state)--- */
import { selectCity } from '../../../slices/citySlice';

/* --- Views Components --- */
import SearchCityForm from '../../views/SearchCityForm';
import WindChart from '../../views/WindChart';

import './styles.scss';

const useStyles = makeStyles({
  card: {
    padding: '50px 20px',
  },
});

const WeatherCharts = () => {
  const dataStore = useSelector(selectCity);
  const classes = useStyles();

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
      ) : (
        <p></p>
      )}
    </>
  );
};

export default WeatherCharts;
