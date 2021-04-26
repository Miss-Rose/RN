import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import {HourList} from './components/HourList';
import {CityContainer} from './components/CityContainer';
import styles from './WeatherCityStyle';
import {Line} from '../../components/sharedComponents/Line';
import {NavHeader} from '../../components/sharedComponents/navHeader/NavHeader';
import {useWeather} from '../../components/context/weatherContext/WeatherContext';
import {AllWeatherData} from '../../components/context/weatherContext/types';
import {optimizationData} from '../../components/helpers/weatherHelper';
import {parserListWeather} from '../../components/helpers/weatherListParser';

const cloud = require('../../assets/images/cloud.png');

const WeatherCity: React.FC = () => {
  const weatherContext = useWeather();
  const {weather, isData}: AllWeatherData = weatherContext;
  const data = optimizationData(weather);
  const list: object[] = parserListWeather(weather);

  //TODO i should make Loading component
  if (!isData) {
    return (
      <Text>Loading....</Text>
    );
  }

  return (
    <View style={styles.root}>
      <ImageBackground source={cloud} style={styles.image}/>
      <NavHeader />
      <CityContainer data={data}/>
      <View style={styles.line}>
        <Line/>
      </View>
      <HourList list={list}/>
      <View style={styles.line2}>
        <Line/>
      </View>
      {/*<SunSetRise data={addInfo} />*/}
    </View>
  );
};

export default WeatherCity;
