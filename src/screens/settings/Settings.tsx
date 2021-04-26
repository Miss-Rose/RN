import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {UserDataForm} from './components/userForm/UserForm';
import {WeatherSettings} from './components/weatherSettings/WeatherSetings';
import {useAuth} from '../../components/context/auth';
import styles from './SettingsStyle';
import {ArrowBack} from '../../components/sharedComponents/arrowBack/ArrowBack';

const Settings = () => {
  const auth = useAuth();

  return (
    <ScrollView style={styles.root}>
      <ArrowBack />
      <View style={styles.container}>
        <UserDataForm />
        <WeatherSettings />
        <TouchableOpacity onPress={auth.signOut}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Settings;
