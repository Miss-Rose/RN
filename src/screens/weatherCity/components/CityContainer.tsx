import React from 'react';
import {Text, View} from 'react-native';
// import {CityWeather} from '../../../components/interfaces/CityWeather';
// import {getIconName} from '../../../components/helpers/helpers';
// import Icon from 'react-native-vector-icons/Fontisto';
import styles from '../styles/CityContainerStyle';

// interface DataProps {
//   data: CityWeather;
// }

export const CityContainer = ({data}: any) => {
  const [city, day,month,dayName] = data;
  // const iconName = getIconName(stateWeather);
  return (
    <View style={styles.container}>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.text}>{dayName}, {month} {day}</Text>
      {/*<View style={styles.infoContainer}>*/}
      {/*  <Text style={styles.tempMin}>{tempMin}</Text>*/}
      {/*  <Icon name={iconName} size={45} style={styles.icon}/>*/}
      {/*  <Text style={styles.state}>{stateWeather}</Text>*/}
      {/*  <Text style={styles.diffTemp}>{tempMin} / {tempMax} °C</Text>*/}
      {/*</View>*/}
    </View>
  );
};
