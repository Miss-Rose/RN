import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export const Switcher = () => {
  const [unit, setUnit] = useState('C');

  return (
    <View>
      <TouchableOpacity onPress={()=>setUnit('C')}>
        <Text>°C</Text>
      </TouchableOpacity>
      <Text> | </Text>
      <TouchableOpacity onPress={()=>setUnit('F')}>
        <Text>°F</Text>
      </TouchableOpacity>
    </View>
  );
};

