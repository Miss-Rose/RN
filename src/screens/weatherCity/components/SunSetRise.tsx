import React from 'react';
import {View} from 'react-native';
import {AdditionalInfo} from '../../../components/interfaces/AdditionalInfo';
import {SunItem} from './SunItem';
import styles from '../styles/SunSetRiseStyle';

interface SunSetRiseProps {
  data: AdditionalInfo;
}

export const SunSetRise = (props: SunSetRiseProps) => {
  const {humidity, wind, sunrise, sunset, humidityIcon, windIcon, sunriseIcon, sunsetIcon} = props.data;
  return (
    <View style={styles.list}>
      <SunItem data={humidity} icon={humidityIcon}/>
      <SunItem data={wind} icon={windIcon}/>
      <SunItem data={sunrise} icon={sunriseIcon}/>
      <SunItem data={sunset} icon={sunsetIcon}/>
    </View>
  );
};
