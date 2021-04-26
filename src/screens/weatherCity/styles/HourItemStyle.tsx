import {StyleSheet} from 'react-native';
import Colors from '../../../components/constants/Colors';

const {colorWhite, colorLines_light} = Colors;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 77,
    marginRight: 16,
    marginLeft: 32,
    position: 'relative',
  },
  hour: {
    fontFamily: 'Regular',
    fontStyle: 'normal',
    fontSize: 12,
    color: colorLines_light,
    fontWeight: '400',
    lineHeight: 14,
    textTransform: 'uppercase',
  },
  icon: {
    color: colorWhite,
    paddingTop: 10,
  },
  temperature: {
    fontFamily: 'Regular',
    fontStyle: 'normal',
    fontSize: 20,
    color: colorWhite,
    fontWeight: '400',
    lineHeight: 23,
    textTransform: 'uppercase',
  },
});

export default styles;
