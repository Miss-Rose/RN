import {StyleSheet} from 'react-native';
import Colors from '../../components/constants/Colors';

const {colorLines_dark} = Colors;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colorLines_dark,
  },
  container: {
    paddingLeft: 32,
    paddingRight: 32,
  },
});

export default styles;
