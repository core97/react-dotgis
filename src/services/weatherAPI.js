import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

const APPID = 'a4db5683b3c0fd2090db58ccb014553a';

const buildUrl = (uri = '', query = '') => `${BASE_URL}${uri}${query}`;

export const getForecastCity = async (loc) => {
  const url = buildUrl('', `?q=${loc}&units=metric&APPID=${APPID}`);

  try {
    const { data } = await axios.get(url);
    const dataFiltered = data.list.filter((eachItem) =>
      eachItem.dt_txt.includes('00:00:00')
    );
    return {
      name: loc,
      forecasts: dataFiltered.map((eachItem) => {
        return {
          date: eachItem.dt,
          temp: eachItem.main.temp,
          tempMin: eachItem.main.temp_min,
          tempMax: eachItem.main.temp_max,
          wind: eachItem.wind.speed,
          clouds: eachItem.clouds.all,
          pressure: eachItem.main.pressure,
          seaLevel: eachItem.main.sea_level,
        };
      }),
    };
  } catch (error) {
    return error;
  }
};
