import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from '../style/subscribeStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Subscribe = props => {
  const [firstName, setFirstName] = useState('firstName');
  const [name, setName] = useState('name');
  const [email, setEmail] = useState();
  const [pwdIsValid, setPwdIsValid] = useState(true);
  //const [confIsValid, setConfIsValid] = useState(false);
  const [pwd, setPwd] = useState('');
  const [pwdConf, setPwdConf] = useState('pwdConf');
  const [lastId, setLastId] = useState(1);
  //const [pwdConfIsValid, setPwdConfIsValid] = useState('false');
  //const [newUser, setNewUser] = useState();

  const pwdConfIsValid = useMemo(() => {
    if (pwdConf === pwd) {
      return true;
    } else {
      return false;
    }
  }, [pwd, pwdConf]);

  useEffect(() => {
    setPwdIsValid(pwd.length < 3 ? false : true);

    return () => {
      console.log('le composant va être détruit.');
    };
  }, [pwdIsValid, pwd, pwdConf]);

  const subscribeFunction = useCallback(async () => {
    if (pwdIsValid && pwdConfIsValid) {
      let newUser = {
        FirstName: firstName,
        LastName: name,
        Password: pwd,
        Email: email,
        Picture: '',
      };

      try {
        const jsonValue = JSON.stringify(newUser);
        await AsyncStorage.setItem('user_' + email, jsonValue);
     
      } catch (e) {
        // saving error
      }

      alert(
        'Bonjour ' +
          firstName +
          ' ' +
          name +
          ' et bienvenue, votre compte a bien été créé! Votre mot de passe est : ' +
          pwd +
          '.',
      );

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
  }, [pwdIsValid, pwdConfIsValid, firstName, name, pwd, email]);

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Inscription</Text>

      <TextInput
        style={styles.input}
        placeholder="Prénom"
        keyboardType="default"
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Nom"
        keyboardType="default"
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="default"
        onChangeText={setEmail}
      />

      <TextInput
        value={pwd}
        style={pwdIsValid ? styles.input : styles.inputError}
        placeholder={'Mot de Passe'}
        // setPwdIsValid(pwd.split('')<3:false);
        // onChangeText={pwd.length > 3 ? setPwdIsValid(true) : false}
        // onChangeText={setPwdIsValid(SetPwd(pwd.split(''))<3) : false)}
        type="password"
        keyboardType="default"
        secureTextEntry={true}
        onChangeText={setPwd}
      />
      <TextInput
        style={pwdConfIsValid ? styles.input : styles.inputError}
        placeholder={'Confirmation du mot de Passe'}
        keyboardType="default"
        secureTextEntry={true}
        onChangeText={setPwdConf}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textInput} onPress={subscribeFunction}>
          Envoyer
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Subscribe;
