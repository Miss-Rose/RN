import StateWeather from '../constants/StateWeather';

interface WeatherIconProps {
  iconName: string;
}

export const StateIcon = new Map<StateWeather, WeatherIconProps>([
  [StateWeather.Sunny, {iconName: 'day-sunny'}],
  [StateWeather.Cloudy, {iconName: 'cloudy'}],
  [StateWeather.Rainy, {iconName: 'rain'}],
  [StateWeather.MostlyCloud, {iconName: 'day-cloudy'}],
  [StateWeather.Snowy, {iconName: 'snowflake-2'}],
]);

export default StateIcon;
