import StateWeather from '../constants/StateWeather';

export interface WeatherByCity {
  id: string;
  name: string;
  temperature: number;
  iconName: string;
  stateWeather: StateWeather;
}
