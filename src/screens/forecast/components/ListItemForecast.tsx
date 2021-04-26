import React from 'react';
import {View, Text} from 'react-native';
import {DayWeather} from '../../../components/interfaces/DayWeather';
import Icon from 'react-native-vector-icons/Fontisto';
import {Line} from '../../../components/sharedComponents/Line';
import styles from '../styles/ListItemForecastStyle';

interface ItemForecastProps {
  day: DayWeather;
}

export const ListItemForecast = (props: ItemForecastProps) => {
  const {day} = props;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.dayBox}>
          <Text style={styles.day}>{day.day}</Text>
        </View>
        <View style={styles.iconBox}>
          <Icon name={day.iconName} size={40} style={styles.icon}/>
        </View>
        <View style={styles.temperatureBox}>
          <View style={styles.temperatureBoxItem}>
            <Text style={styles.temperature}>{day.tempFrom}</Text>
            <Text style={styles.gradus}>o</Text>
          </View>
          <View style={styles.line}/>
          <View style={styles.temperatureBoxItem}>
            <Text style={styles.temperature}>{day.tempTo}</Text>
            <Text style={styles.gradus}>o</Text>
          </View>
        </View>
      </View>
      <View>
        {
          day.id !== '7' ? <Line /> : null
        }
      </View>
    </>
  );
};
