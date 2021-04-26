import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../constants/Colors';

export const Line = () => {
  return (
    <View style={styles.line}/>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 2,
    backgroundColor: Colors.colorLines_light,
    flexGrow: 1,
  },
});
