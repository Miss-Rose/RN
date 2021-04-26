import React, {useState} from 'react';
import {StatusBar, View} from 'react-native';
import {DayWeather} from '../../components/interfaces/DayWeather';
import {DayInWeek} from '../../components/constants/DayInWeek';
import {ListForecast} from './components/ListForecast';
import styles from './ForecastStyle';

const initialData: DayWeather[] = [
  {id: '1', day: DayInWeek.Today, tempFrom: -2, tempTo: 8, iconName: 'day-cloudy'},
  {id: '2', day: DayInWeek.Tuesday, tempFrom: 2, tempTo: 12, iconName: 'day-sunny'},
  {id: '3', day: DayInWeek.Wednesday, tempFrom: -3, tempTo: 6, iconName: 'day-sunny'},
  {id: '4', day: DayInWeek.Thursday, tempFrom: -2, tempTo: 7, iconName: 'cloudy'},
  {id: '5', day: DayInWeek.Friday, tempFrom: -4, tempTo: 5, iconName: 'day-cloudy'},
  {id: '6', day: DayInWeek.Saturday, tempFrom: -2, tempTo: 10, iconName: 'day-cloudy'},
  {id: '7', day: DayInWeek.Sunday, tempFrom: -3, tempTo: 9, iconName: 'rain'},
];

export const Forecast = () => {
  const [data] = useState<DayWeather[]>(initialData);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <ListForecast days={data} />
    </View>
  );
};
