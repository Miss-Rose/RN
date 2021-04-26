import React, {useState} from 'react';
import {View} from 'react-native';
import {CustomTextInput} from '../../../components/text/CustomTextInput';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../../components/constants/Colors';
import styles from '../styles/SearchPanelStyle';

export const SearchPanel = () => {
  const [value, setValue] = useState('');

  const handleChange = (str: string) => {
    setValue(str);
  };

  return (
    <View style={styles.container}>
      <View>
        <CustomTextInput
          placeholder="Enter the name of the city"
          value={value}
          onChangeValue={handleChange}
          placeholderTextColor={Colors.colorLines_light}
          styles={styles.input}
        />
      </View>
      <View style={styles.iconContainer}>
        <Icon name="search" size={36} style={styles.icon}/>
      </View>
    </View>
  );
};
