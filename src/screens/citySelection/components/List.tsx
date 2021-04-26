import React from 'react';
import {StatusBar, View, FlatList} from 'react-native';
import {WeatherByCity} from '../../../components/interfaces/WeatherByCity';
import {ListItem} from './ListItem';

interface CitiesWeatherProps {
  cities: WeatherByCity[];
}

export const List = ({cities}: CitiesWeatherProps) => {
  return (
    <View>
      <StatusBar barStyle="dark-content"/>
      <FlatList
        data={cities}
        renderItem={({item}) => <ListItem item={item} key={item.id} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
