import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

/* --- Redux (action) --- */
import { addCity, selectCity } from '../../../slices/citySlice';

/* --- Request Weather API ---- */
import { getForecastCity } from '../../../services/weatherAPI';

import './styles.scss';

const useStyles = makeStyles({
  input: {
    marginBottom: '20px',
  },
});

const SearchCity = () => {
  const [cityToSearch, setCityToSearch] = useState('');
  const [isExistCity, setIsExistCity] = useState(false);
  const [isError, setError] = useState(false);
  const dispatch = useDispatch();
  const dataStore = useSelector(selectCity);
  const classes = useStyles();



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const cityCapitalized = cityToSearch.charAt(0).toUpperCase() + cityToSearch.slice(1);
      if (dataStore.cities.some(eachCity => eachCity.name === cityCapitalized)) {
        return setIsExistCity(true);
      }
      dispatch(addCity(await getForecastCity(cityCapitalized)));
      setCityToSearch('');
      setIsExistCity(false);
    } catch (error) {
      setError(true);
      setCityToSearch('');
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className={classes.input}
        value={cityToSearch}
        onChange={(e) => setCityToSearch(e.target.value)}
        label="Would you like to add a city?"
      />
      <Button type="submit" disabled={dataStore.cities.length >= 8 ? true : false}>Add city</Button>
      {dataStore.cities.length >= 8 && <p>You have reached the maximum of cities that you can see</p>}
      {isExistCity && <p>The city you are looking for is already being displayed</p>}
      {isError && <p>Error when add city</p>}
    </form>
  );
};

export default SearchCity;
