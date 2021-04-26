import {Weather} from '../context/weatherContext/types';
import {DayInWeek} from '../constants/DayInWeek';

export const optimizationData = (weather: Weather | null) => {
  const city = weather?.city.name;
  const date = Number(weather?.list[0].dt);
  const strDate: string = '' + new Date(date * 1000);
  const day:string = strDate.split(' ')[2];
  const month:string = strDate.split(' ')[1];
  const _dayName = strDate.split(' ')[0];

  //TODO i don't know for now how to fix error = >
  // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type
  // 'typeof DayInWeek'. No index signature with a parameter of type 'string' was found on type 'typeof DayInWeek'.
  // @ts-ignore
  const dayName = DayInWeek[_dayName];
  return [
    city,
    day,
    month,
    dayName,
  ];
};
