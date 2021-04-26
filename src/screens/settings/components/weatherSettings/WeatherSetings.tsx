import React from 'react';
import {View} from 'react-native';
import RangeInput from './components/rangeInput/RangeInput';
import {Switcher} from '../switcher/Switcher';

export const WeatherSettings = () => {
  return (
    <View>
      <RangeInput label="Show weather for" units="days" min={1} max={5}/>
      <RangeInput label="Update weather every" units="min" min={5} max={30} />
      <Switcher />
    </View>
  );
};

