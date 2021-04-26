import {StyleSheet} from 'react-native';
import Colors from '../../components/constants/Colors';

const {colorLines_dark} = Colors;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colorLines_dark,
  },
  image: {
    position: 'absolute',
    height: 233,
    left: 0,
    right: 0,
    top: 0,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.3,
  },
  line: {
    top: 49,
  },
  line2: {
    top: 136,
  },
});

export default styles;
