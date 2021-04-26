import {StyleSheet} from 'react-native';
import Colors from '../../../../../../components/constants/Colors';

const {colorWhite} = Colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  trackStyle:{
    height: 10,
  },
  thumbStyle:{
    height: 20,
    width: 20,
    backgroundColor: colorWhite,
  },
  icon: {
    color: colorWhite,
  },
});

export default styles;
