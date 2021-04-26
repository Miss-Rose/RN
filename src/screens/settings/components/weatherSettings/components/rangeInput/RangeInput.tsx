import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Slider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './RangeInputstyle';
import {RangeInputProps} from './types';

const RangeInput = ({label, min, max, units}: RangeInputProps) => {
  const [value, setValue] = useState(min);

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text>{label}</Text>
          <Text>{value} {units}</Text>
        </View>
        <Slider
          value={value}
          onValueChange={setValue}
          maximumValue={max}
          minimumValue={min}
          step={1}
          trackStyle={styles.trackStyle}
          thumbStyle={styles.thumbStyle}
          thumbProps={{
            children: (
              <Icon
                name="circle"
                size={20}
                style={styles.icon}
              />
            ),
          }}
        />
      </View>
    </>
  );
};

export default RangeInput;
