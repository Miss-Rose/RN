import StateWeather from '../constants/StateWeather';

export const getIconName = (state: string): string => {
  switch (state){
  case StateWeather.Sunny: return 'day-sunny';
  case StateWeather.Rainy: return 'rain';
  case StateWeather.Cloudy: return 'cloudy';
  case StateWeather.MostlyCloud: return 'day-cloudy';
  case StateWeather.Snowy: return 'snowflake';
  default: return '';
  }
};

