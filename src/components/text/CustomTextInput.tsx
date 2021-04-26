import React from 'react';
import { SafeAreaView, TextInput } from 'react-native';

interface CustomTextInputProps {
  value: string;
  onChangeValue: (e: any) => any;
  placeholder: string,
  placeholderTextColor: string,
  styles?: object
}

export const CustomTextInput = (props: CustomTextInputProps) => {
  return (
    <SafeAreaView>
      <TextInput
        style={props.styles}
        onChangeText={props.onChangeValue}
        value={props.value}
        placeholder={props.placeholder}
        keyboardType="default"
        placeholderTextColor={props.placeholderTextColor}
      />
    </SafeAreaView>
  );
};
