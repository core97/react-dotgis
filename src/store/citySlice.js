import { createSlice } from '@reduxjs/toolkit';

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    cities: [],
  },
  reducers: {
    addCity: (state, action) => {
      return {
        cities: [
          ...state.cities,
          {
            name: action.payload.name,
            forecasts: action.payload.forecasts((eachForecast) => {
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
  },
});

export const { addCity } = citySlice.actions;

export const selectCity = state => state.city;

export default citySlice.reducer;
