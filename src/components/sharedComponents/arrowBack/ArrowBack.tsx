import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import {View} from 'react-native';
import styles from './ArrowBackStyle';
import { useNavigation } from '@react-navigation/native';

export const ArrowBack = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Icon name="angle-left" size={30} style={styles.icon} onPress={handleGoBack}/>
    </View>
  );
};

