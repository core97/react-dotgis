import { createSlice } from '@reduxjs/toolkit';

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    // Forecast period by days 
    timeframe: 1,
    cities: [],
  },
  reducers: {
    addCity: (state, action) => {
      return {
        ...state,
        cities: [
          ...state.cities,
          {
            name: action.payload.name,
            forecasts: action.payload.forecasts.map((eachForecast) => {
              return {
                date: eachForecast.date,
                temp: eachForecast.temp,
                tempMin: eachForecast.tempMin,
                tempMax: eachForecast.tempMax,
                wind: eachForecast.wind,
                clouds: eachForecast.clouds,
                pressure: eachForecast.pressure,
                seaLevel: eachForecast.seaLevel,
              };
            }),
          },
        ],
      };
    },
    removeCity: (state, action) => {
      return {
        ...state,
        cities: state.cities.filter(eachCity => eachCity.name !== action.payload.name)
      }
    }
  },
  
});

export const { addCity, removeCity } = citySlice.actions;

export const selectCity = state => state.city;

export default citySlice.reducer;
