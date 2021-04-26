import {StyleSheet} from 'react-native';
import Colors from '../../../components/constants/Colors';

const {colorWhite, colorLines_light} = Colors;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 15,
    paddingTop: 19,
    paddingBottom: 19,
  },
  dayBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 100,
    alignItems: 'center',
  },
  day: {
    fontFamily: 'SemiBold',
    fontWeight: '600',
    fontSize: 28,
    color: colorWhite,
    alignItems: 'center',
  },
  iconBox: {
    justifyContent: 'center',
    width: 70,
    alignItems: 'center',
  },
  icon: {
    color: colorLines_light,
  },
  temperatureBox: {
    marginLeft:28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
    alignItems: 'center',
  },
  temperatureBoxItem:{
    flexDirection: 'row',
  },
  temperature:{
    fontSize: 24,
    color: colorWhite,
    lineHeight:28,
  },
  gradus: {
    fontSize: 18,
    color: colorWhite,
    lineHeight: 14,
  },
  line: {
    height: 10,
    backgroundColor: colorLines_light,
    flexGrow: 1,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 25,
  },
});

export default styles;
