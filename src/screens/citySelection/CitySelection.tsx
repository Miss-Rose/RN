import React, {useState} from 'react';
import {StatusBar, View} from 'react-native';
import {WeatherByCity} from '../../components/interfaces/WeatherByCity';
import StateWeather from '../../components/constants/StateWeather';
import {List} from './components/List';
import {SearchPanel} from './components/SearcPanel';
import styles from './CitySelectionStyle';
import {ArrowBack} from '../../components/sharedComponents/arrowBack/ArrowBack';

const initialData: WeatherByCity[] = [
  {id: '1', name: 'Dnipro', stateWeather: StateWeather.MostlyCloud, temperature: -2, iconName: 'day-cloudy' },
  {id: '2', name: 'Donetsk', stateWeather: StateWeather.Sunny, temperature: -3, iconName: 'day-sunny'},
  {id: '3', name: 'Zaporizhzhia', stateWeather: StateWeather.MostlyCloud, temperature: -1, iconName: 'day-cloudy' },
  {id: '4', name: 'Kiev', stateWeather: StateWeather.Cloudy, temperature: 0, iconName: 'cloudy'},
  {id: '5', name: 'Kryvyi Rih', stateWeather: StateWeather.Rainy, temperature: 0, iconName: 'rain' },
  {id: '6', name: 'Lviv', stateWeather: StateWeather.Rainy, temperature: 2, iconName: 'rain' },
];

export const CitySelection = () => {
  const [data] = useState<WeatherByCity[]>(initialData);
  return (
    <View style={styles.citySelectionContainer}>
      <StatusBar barStyle="dark-content" />
      <ArrowBack />
      <SearchPanel />
      <List cities={data} />
    </View>
  );
};


