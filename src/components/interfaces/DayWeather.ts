import {DayInWeek} from '../constants/DayInWeek';

export interface DayWeather {
  id: string;
  day: DayInWeek;
  tempFrom: number;
  tempTo: number;
  iconName: string;
}
