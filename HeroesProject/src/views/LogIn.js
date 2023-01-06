import React, {useCallback, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../style/loginStyle';
import {useNavigation} from '@react-navigation/native';

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
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginFunction = useCallback(async () => {
    console.log(password);
    const value = await AsyncStorage.getItem('user_' + email);

    if (!value) {
      alert("l'utilisateur n'existe pas !");
      return;
    }

    const user = JSON.parse(value);

    console.log('user', user);

    if (user.Password !== password) {
      alert('le mdp est faux.');
      return;
    }

    alert('connecté !');

    navigation.navigate('HeroesScreen');

    //  pwdConfIsValid ? alert('Bonjour ' + firstName + ' ' + name + ' , votre mot de passe est :' + pwd + ' .'): alert('raté !')
  }, [email, navigation, password]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>CONNEXION</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.textInput}>E-mail</Text>
          <TextInput
            style={styles.input}
            keyboardType="default"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.textInput} keyboardType="default">
            Mot de passe
          </Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
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
          <Text style={styles.textConnection} onPress={loginFunction}>
            Connexion
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;
