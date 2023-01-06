import React, {useCallback, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../style/loginStyle';

import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';

const LogIn = () => {
  const [emailLogin, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userExists, setUserExists] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const getData = async () => {
    try {
      console.log(emailLogin);
      const value1 = await AsyncStorage.getItem('user_' + emailLogin);
      const value = JSON.parse(value1);
      console.log(value);
      if (value !== null) {
        setUserExists(true);
      } else {
        setUserExists(false);
      }
      console.log(userExists);
      return value != null ? JSON.parse(value) : null;
    } catch (e) {
      // error reading value
    }
  };

  const loginFunction = useCallback(async () => {
    try {
    console.log(emailLogin);

      console.log(password);
      const value = await AsyncStorage.getItem('user_' + emailLogin);
      console.log(value);
      // console.log(value);
      if (value !== null) {
        setUserExists(true);
        console.log('userexists doit etre true : ' + userExists);
      } else {
        setUserExists(false);
        console.log('userexists doit etre false : ' + userExists);
      }
      console.log(userExists);
      if (value.password === password) {
        setPasswordIsValid(true);
      } else {
        setPasswordIsValid(false);
      }
      return value != null ? JSON.parse(value) : null;
    } catch (e) {
      // error reading value
    }
    //claire@gmail.com
    if (userExists && passwordIsValid) {
      alert('connecté !');

      /*  try {
        const newUserofAsyncStorage = await AsyncStorage.getItem(
          'user_' + email,
        );
        console.log(newUserofAsyncStorage);
        if (newUserofAsyncStorage !== null) {
          // value previously stored
        }
      } catch (e) {
        console.log(e);
      } */
    } else {
      alert('raté !');
    }

    //  pwdConfIsValid ? alert('Bonjour ' + firstName + ' ' + name + ' , votre mot de passe est :' + pwd + ' .'): alert('raté !')
  }, [userExists, passwordIsValid, emailLogin, password]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>CONNEXION</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.textInput}>E-mail</Text>
          <TextInput
            style={styles.input}
            keyboardType="default"
            onChangeText={setEmail}
          />
          <Text
            style={styles.textInput}
            keyboardType="default"
            onChangeText={setPassword}>
            Mot de passe
          </Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
        <View style={styles.connectButtonsContainer}>
          <TouchableOpacity>
            <Image
              source={require('../../logo-facebook.png')}
              style={styles.connectButtons}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../logo-google.png')}
              style={styles.connectButtons}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          //  onPress={@goToHeroesList}
        >
          <Text style={styles.textConnection} onPress={getData}>
            Connexion
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;
