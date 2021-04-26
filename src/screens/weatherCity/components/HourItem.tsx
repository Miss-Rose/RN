import React from 'react';
import {Text, View} from 'react-native';
import {TempByHours} from '../../../components/interfaces/TempByHours';
// import Icon from 'react-native-vector-icons/Fontisto';
import styles from '../styles/HourItemStyle';

interface ItemProps{
  item: TempByHours;
}
export const HourItem = (props:ItemProps) => {
  const {temp,time} = props.item;
  console.log('BLA BLA', props.item);
  return (
    <View style={styles.container}>
      <Text style={styles.hour}>{time}</Text>
      {/*<Icon style={styles.icon} name={props.data.icon} size={30} />*/}
      <Text style={styles.temperature}>{temp}</Text>
    </View>
  );
};
