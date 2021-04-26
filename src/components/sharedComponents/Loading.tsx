import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';
import Colors from '../constants/Colors';

interface LoadingProps {
  isLoading: boolean;
}

const {colorLines_light} = Colors;

export const Loading: FC<LoadingProps> = ({isLoading}) => {
  return isLoading ? (
    <View>
      <ActivityIndicator size="large" color={colorLines_light} />
    </View>
  ) : null;
};
