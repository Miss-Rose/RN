import {StyleSheet} from 'react-native';
import Colors from '../../components/constants/Colors';

const {colorLines_dark, colorLines_light, colorButton_frame, colorWhite} = Colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorLines_dark,
    alignItems: 'center',
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 8,
    paddingRight: 8,
    width: 296,
    borderRadius: 100,
  },
  input1: {
    top: 172,
    backgroundColor: colorLines_light,
  },
  input2: {
    top: 232,
    backgroundColor: colorLines_light,
  },
  login: {
    height: 36,
    color: colorWhite,
  },
  password: {
    height: 36,
    color: colorWhite,
  },
  button: {
    backgroundColor: colorButton_frame,
    top: 360,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 8,
    paddingRight: 8,
    width: 296,
    borderRadius: 100,
  },
  button_text: {
    height: 36,
    paddingTop: 8,
    color: colorWhite,
    fontFamily: 'SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
    display: 'flex',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default styles;
