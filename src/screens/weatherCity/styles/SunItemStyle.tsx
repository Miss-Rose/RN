import {StyleSheet} from 'react-native';
import Colors from '../../../components/constants/Colors';

const {colorWhite} = Colors;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: colorWhite,
  },
  text: {
    fontFamily: 'Regular',
    fontStyle: 'normal',
    fontSize: 20,
    color: colorWhite,
    fontWeight: 'normal',
    lineHeight: 23,
    textTransform: 'uppercase',
  },
});

export default styles;
