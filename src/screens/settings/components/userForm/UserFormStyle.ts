import {StyleSheet} from 'react-native';
import Colors from '../../../../components/constants/Colors';

const {colorWhite} = Colors;

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colorWhite,
    paddingTop: 18,
  },
  text: {
    color: colorWhite,
    fontFamily: 'Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
  },
});

export default styles;
