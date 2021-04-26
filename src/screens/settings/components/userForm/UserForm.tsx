import React, {FC, useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './UserFormStyle';
import Colors from '../../../../components/constants/Colors';

export const UserDataForm: FC = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const {colorLines_light} = Colors;

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.text}
          autoCapitalize="none"
          placeholder="Name"
          onChangeText={value => setName(value)}
          value={name}
          placeholderTextColor={colorLines_light}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.text}
          autoCapitalize="none"
          placeholder="Age"
          onChangeText={value => setAge(value)}
          value={age}
          placeholderTextColor={colorLines_light}
        />
      </View>
    </View>
  );
};

export default UserDataForm;
