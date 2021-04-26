import {StyleSheet} from 'react-native';
import Colors from '../../../components/constants/Colors';

const {colorWhite} = Colors;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: colorWhite,
    marginLeft: 32,
    marginRight: 32,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    paddingBottom: 0,
  },
  icon: {
    color: colorWhite,
    paddingLeft: 66,
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    fontWeight: 'normal',
    fontSize: 16,
    fontFamily: 'Regular',
  },
});

export default styles;
