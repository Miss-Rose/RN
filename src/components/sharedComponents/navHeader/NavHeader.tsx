import React from 'react';
import {View} from 'react-native';
import IconHome from 'react-native-vector-icons/MaterialIcons';
import IconSettings from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import RoutesName from '../../constants/RoutesName';
import styles from './style';

const {SETTINGS,CITY_SELECTION } = RoutesName;

export const NavHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <IconHome name="settings" size={35} style={styles.icon} onPress={() => navigation.navigate(SETTINGS)}/>
      <IconSettings name="location-city" size={35} style={styles.icon} onPress={() => navigation.navigate(CITY_SELECTION)}/>
    </View>
  );
};
