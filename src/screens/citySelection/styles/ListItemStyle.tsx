import {StyleSheet} from 'react-native';
import Colors from '../../../components/constants/Colors';
const {colorLines_light, colorWhite} = Colors;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: colorLines_light,
    paddingTop: 19,
    paddingBottom: 19,
  },
  temperatureContainer: {
    flexDirection: 'row',
    paddingLeft: 32,
    paddingRight: 32,
    fontFamily: 'Regular',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 1,
    justifyContent: 'center',
    width: 100,
  },
  tempText: {
    fontSize: 36,
    color: colorWhite,
  },
  gradus: {
    fontSize: 18,
    color: colorWhite,
  },
  iconContainer: {
    width:70,
    marginRight: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    justifyContent: 'center',
    color: colorLines_light,
  },
  cityWeatherContainer: {
    justifyContent: 'center',
  },
  state: {
    fontSize: 12,
    lineHeight: 14,
    textTransform: 'uppercase',
    color: colorLines_light,
  },
  city: {
    fontSize: 24,
    fontWeight: '600',
    color: colorWhite,
    lineHeight: 28,
  },
});

export default styles;
