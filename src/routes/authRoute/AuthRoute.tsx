import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Forecast} from '../../screens/forecast/Forecast';
import Colors from '../../components/constants/Colors';
import styles from './style';
import {WeatherStack} from './additionaRoutes/WeatherStack';
import RoutesName from '../../components/constants/RoutesName';
import {setTabOptions} from '../../components/helpers/tabVisibility';
import {ProvideWeather} from '../../components/context/weatherContext/WeatherContext';

const {colorBackground_dark, colorWhite, colorButton_text} = Colors;
const Tab = createBottomTabNavigator();
const {WEATHER_STACK, FORECAST} = RoutesName;

export const AuthRoute = () => {
  return (
    <ProvideWeather>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colorWhite,
          inactiveTintColor: colorButton_text,
          activeBackgroundColor: colorBackground_dark,
          inactiveBackgroundColor: colorBackground_dark,
          labelStyle: styles.label,
          labelPosition: 'beside-icon',
          style: styles.button,
        }}>
        <Tab.Screen name={WEATHER_STACK} component={WeatherStack} options={setTabOptions} />
        <Tab.Screen name={FORECAST} component={Forecast} options={{title: 'Forecast'}}/>
      </Tab.Navigator>
    </ProvideWeather>
  );
};


