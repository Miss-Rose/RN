import StateWeather from '../constants/StateWeather';
import {AdditionalInfo} from './AdditionalInfo';
import {TempByHours} from './TempByHours';
import {DayInWeek} from '../constants/DayInWeek';

interface Weather {
  cityName: string;
  dayName: DayInWeek;
  month: string;
  day: number;
  tempMax: number;
  tempMin: number;
  stateWeather: StateWeather;
  tempByHour: TempByHours[];
  addInfo: AdditionalInfo;
}
