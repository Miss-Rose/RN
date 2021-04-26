import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles/SunItemStyle';

interface SunItemProps {
  data: string;
  icon: string;
}

export const SunItem = ({data, icon}: SunItemProps) => {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name={icon} size={30}/>
      <Text style={styles.text}>{data}</Text>
    </View>
  );
};
