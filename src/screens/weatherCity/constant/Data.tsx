import {AdditionalInfo} from '../../../components/interfaces/AdditionalInfo';
import {TempByHours} from '../../../components/interfaces/TempByHours';
import {Weather} from '../../../components/interfaces/Weather';
import {DayInWeek} from '../../../components/constants/DayInWeek';
import StateWeather from '../../../components/constants/StateWeather';

export const initialAddInfo: AdditionalInfo = {
  humidity: '50%',
  wind: '5m/c',
  sunrise: '6:20',
  sunset: '16:20',
  humidityIcon: 'droplet',
  windIcon: 'wind',
  sunriseIcon: 'sunrise',
  sunsetIcon: 'sunset',
};

export const initialTempByHours: TempByHours[] = [
  {id:'h1', hour: '6:00', icon: 'day-sunny', temperature: -2},
  {id:'h2', hour: '7:00', icon: 'rain', temperature: -1},
  {id:'h3', hour: '8:00', icon: 'rain', temperature: 0},
  {id:'h4', hour: '9:00', icon: 'day-cloudy', temperature: 2},
  {id:'h5', hour: '10:00', icon: 'day-sunny', temperature: 4},
  {id:'h6', hour: '11:00', icon: 'rain', temperature: 3},
  {id:'h7', hour: '12:00', icon: 'day-sunny', temperature: 4},
  {id:'h8', hour: '13:00', icon: 'cloudy', temperature: 3},
  {id:'h9', hour: '14:00', icon: 'day-sunny', temperature: 5},
  {id:'h10', hour: '15:00', icon: 'cloudy', temperature: 4},
];

const initialKharkiv: Weather = {
  cityName: 'Kharkiv',
  dayName: DayInWeek.Monday,
  month: 'November',
  day: 3,
  tempMin: -2,
  tempMax: 8,
  stateWeather: StateWeather.MostlyCloud,
  tempByHour: initialTempByHours,
  addInfo: initialAddInfo,
};

export default initialKharkiv;
