import {Weather} from '../context/weatherContext/types';

const convertTime = (str: number) => {
  const strDate: string = '' + (new Date(str * 1000));
  return strDate.split(' ')[4].slice(0, 5);
};

export const parserListWeather = (weather: Weather | null) => {
  const _list = weather?.list;
  const newArray: object[] = [];
  if (_list) {
    _list.map((item) => {
      newArray.push({
        'time': convertTime(item.dt),
        'temp': +(item.main.temp),
      });
    });
  }
  return newArray;
};
