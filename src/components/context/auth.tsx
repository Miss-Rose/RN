import React, {FC, createContext, useContext, useEffect, useState} from 'react';
import {firebase, FirebaseAuthTypes} from '@react-native-firebase/auth';

interface AuthContextProps {
  user: boolean;
  signWithEmailPassword(emai: string, password: string): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextProps>({
  user: false,
  signOut: () => {},
  signWithEmailPassword: () =>{},
});

export const ProvideAuth:FC = ({children}) => {
  const auth = useProvideAuth();
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth(){
  const [user, setUser] = useState(false);
  const signWithEmailPassword = (email: string, password: string) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setTimeout(setUser(!!res.user), 2000);
        // setUser(!!res.user);
        return res.user;
      })
      .catch(() => setUser(false));
  };

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser: FirebaseAuthTypes.User | null) => {
      if (authUser) {
        setUser(!!authUser);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {user, signWithEmailPassword, signOut};
}

