import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export const Splash = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>
        Weather App
      </Text>
    </View>
  );
};
