import {Alert} from 'react-native';

const Message = () =>
  Alert.alert(
    'Something went wrong ...',
    'You entered wrong email or password',
    [
      {
        text: 'Ok',
        style: 'cancel',
      },
    ]
  );

export default Message;
