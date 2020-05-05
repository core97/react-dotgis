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
  },
  changeTimeframe: (state, action) => {
    return {
      ...state,
      timeframe: action.payload.timeframe
    }
  }
});

export const { addCity } = citySlice.actions;

export const selectCity = state => state.city.cities;

export default citySlice.reducer;
