import React from 'react';
import {StatusBar, View, FlatList} from 'react-native';
import {DayWeather} from '../../../components/interfaces/DayWeather';
import {ListItemForecast} from './ListItemForecast';


interface ListForecastProps {
  days: DayWeather[];
}

export const ListForecast = ({days}: ListForecastProps) => {
  return (
    <View>
      <StatusBar barStyle="dark-content"/>
      <FlatList
        data={days}
        renderItem={({item}) => <ListItemForecast day={item} key={item.id} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
