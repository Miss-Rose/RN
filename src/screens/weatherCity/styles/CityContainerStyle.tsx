import {StyleSheet} from 'react-native';
import Colors from '../../../components/constants/Colors';

const {colorWhite, colorLines_light} = Colors;

const styles = StyleSheet.create({
  container: {
    top: 5,
    paddingRight: 32,
    paddingLeft: 32,
  },
  city: {
    top: 8,
    fontFamily: 'SemiBold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 52,
    lineHeight: 61,
    color: colorWhite,
  },
  text: {
    top: 10,
    fontFamily: 'Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 23,
    textTransform: 'uppercase',
    color: colorLines_light,
    letterSpacing: 2,
  },
  infoContainer: {
    top: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tempMin: {
    fontFamily: 'Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 60,
    lineHeight: 70,
    color: colorWhite,
    marginRight:16,
  },
  icon: {
    color: colorLines_light,
  },
  state: {
    fontFamily: 'Regular',
    fontStyle: 'normal',
    fontSize: 12,
    color: colorLines_light,
    fontWeight: '400',
    lineHeight: 14,
    textTransform: 'uppercase',
    width: 56,
  },
  diffTemp: {
    width:40,
    fontFamily: 'Regular',
    fontStyle: 'normal',
    fontSize: 18,
    color: colorWhite,
    fontWeight: '400',
    lineHeight: 21,
    textTransform: 'uppercase',
  },
});

export default styles;
