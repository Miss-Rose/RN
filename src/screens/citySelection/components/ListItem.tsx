import React from 'react';
import {WeatherByCity} from '../../../components/interfaces/WeatherByCity';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import styles from '../styles/ListItemStyle';

interface ItemProps {
  item: WeatherByCity;
}

export const ListItem = (props: ItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.temperatureContainer}>
        <Text style={styles.tempText}>{props.item.temperature}</Text>
        <Text style={styles.gradus}>o</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name={props.item.iconName} size={40} style={styles.icon}/>
      </View>
      <View style={styles.cityWeatherContainer}>
        <Text style={styles.city}>{props.item.name}</Text>
        <Text style={styles.state}>{props.item.stateWeather}</Text>
      </View>
    </View>
  );
};

