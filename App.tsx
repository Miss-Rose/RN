import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import styles from './style';
import Routes from './src/routes/Routes';
import {NavigationContainer, NavigationContainerRef} from '@react-navigation/native';
import {ProvideAuth} from './src/components/context/auth';
import {useReduxDevToolsExtension} from '@react-navigation/devtools';

const App: React.FC = () => {
  const navigationRef: React.RefObject<NavigationContainerRef> = React.useRef(null);
  useReduxDevToolsExtension(navigationRef);
  return (
    <ProvideAuth>
      <NavigationContainer ref={navigationRef}>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar barStyle="dark-content"/>
          <Routes />
        </SafeAreaView>
      </NavigationContainer>
    </ProvideAuth>
  );
};
export default App;
