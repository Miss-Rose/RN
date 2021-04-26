import React, {useState} from 'react';
import {View, Text, TextInput, Keyboard, TouchableOpacity} from 'react-native';
import {useAuth} from '../../components/context/auth';
import styles from './LoginStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../components/constants/Colors';
import Message from '../../components/sharedComponents/Message';
import {useNavigation} from '@react-navigation/native';
import RoutesName from '../../components/constants/RoutesName';

const {colorWhite} = Colors;
const {WEATHER_STACK} = RoutesName;

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const auth = useAuth();

  const handleLogin = () => {
    Keyboard.dismiss();
    auth.signWithEmailPassword(email, password);
    if (auth.user) {
      setPassword('');
      setEmail('');
      navigation.navigate(WEATHER_STACK);
    } else {
      Message();
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={[styles.input, styles.input1]}>
          <Icon name="account-circle" size={35}/>
          <TextInput
            style={styles.login}
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={mail => setEmail(mail)}
            value={email}
            placeholderTextColor={colorWhite}
          />
        </View>
        <View style={[styles.input, styles.input2]}>
          <Icon name="lock" size={35}/>
          <TextInput
            style={styles.password}
            secureTextEntry
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={psw => setPassword(psw)}
            value={password}
            placeholderTextColor={colorWhite}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.button_text}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Login;

//       <Button title="Login" onPress={auth.signOut} />
