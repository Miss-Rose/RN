import {StyleSheet} from 'react-native';
import Colors from '../../components/constants/Colors';

const {colorLines_dark, colorWhite} = Colors;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: colorLines_dark,
  },
  text: {
    width: 326,
    height: 180,
    left: 22,
    top: 261,
    fontFamily: 'Regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 64,
    lineHeight: 75,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: colorWhite,
  },
});
export default styles;
