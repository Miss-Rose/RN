import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Settings from '../../../screens/settings/Settings';
import {CitySelection} from '../../../screens/citySelection/CitySelection';
import WeatherCity from '../../../screens/weatherCity/WeatherCity';
import RoutesName from '../../../components/constants/RoutesName';

const Weather = createStackNavigator();
const {WEATHER, SETTINGS, CITY_SELECTION} = RoutesName;

export const WeatherStack:React.FC = () => {
  return (
    <Weather.Navigator>
      <Weather.Screen
        name={WEATHER}
        component={WeatherCity}
        options={{
          header: () => null,
        }}
      />
      <Weather.Screen
        name={SETTINGS}
        component={Settings}
        options={{
          header: () => null,
          title: '',
        }}
      />
      <Weather.Screen
        name={CITY_SELECTION}
        component={CitySelection}
        options={{
          header: () => null,
          title: '',
        }}
      />
    </Weather.Navigator>
  );
};
