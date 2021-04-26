import {StyleSheet} from 'react-native';
import Colors from '../../components/constants/Colors';

const {colorLines_light, colorLines_dark} = Colors;

const styles = StyleSheet.create({
  citySelectionContainer : {
    marginRight: 0,
    marginLeft: 0,
    backgroundColor: colorLines_dark,
    flex: 1,
  },
  arrow: {
    marginTop: 8,
    marginLeft: 21,
    color: colorLines_light,
  },
});

export default styles;
