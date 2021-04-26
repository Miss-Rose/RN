import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
const {colorLines_light} = Colors;

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop:8,
  },
  icon: {
    color: colorLines_light,
  },
});

export default styles;
