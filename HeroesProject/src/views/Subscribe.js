import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const Subscribe = props => {
  const [firstName, setFirstName] = useState('firstName');
  const [name, setName] = useState('name');
  const [pwdIsValid, setPwdIsValid] = useState(true);
  //const [confIsValid, setConfIsValid] = useState(false);
  const [pwd, setPwd] = useState('');
  const [pwdConf, setPwdConf] = useState('pwdConf');
  //const [pwdConfIsValid, setPwdConfIsValid] = useState('false');

  const pwdConfIsValid = useMemo(() => {
    if (pwdConf === pwd) {
      return true;
    } else {
      return false;
    }
  }, [pwd, pwdConf]);

  useEffect(() => {
    console.log('le composant est opérationnel.');

    console.log('le texte change.');
    console.log('pwd = ' + pwd);
    console.log('pwdIsValid = ' + pwdIsValid);
    setPwdIsValid(pwd.length < 3 ? false : true);

    return () => {
      console.log('le composant va être détruit.');
    };
  }, [pwdIsValid, pwd, pwdConf]);

  const myOnPressFunction = useCallback(() => {
    if (pwdIsValid && pwdConfIsValid) {
      alert(
        'Bonjour ' +
          firstName +
          ' ' +
          name +
          ' , votre mot de passe est : ' +
          pwd +
          '.',
      );
    } else {
      alert('raté !');
    }

    //  pwdConfIsValid ? alert('Bonjour ' + firstName + ' ' + name + ' , votre mot de passe est :' + pwd + ' .'): alert('raté !')
  }, [pwdIsValid, pwdConfIsValid, firstName, name, pwd]);

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Inscription</Text>

      <Image
        style={styles.picture}
        source={require('../images/profilePic.jpg')}
      />

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
        <Text
          style={styles.textInput}
          onPress={myOnPressFunction}
        >
          Envoyer
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  picture: {
    width: 150,
    height: 150,
    borderRadius: 80,
  },
  input: {
    width: '85%',
    height: 50,
    color: 'indigo',
    fontSize: 20,
    borderRadius: 10,
    padding: 10,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'pink',
  },
  inputError: {
    width: '85%',
    height: 50,
    color: 'orange',
    fontSize: 20,
    borderRadius: 10,
    padding: 10,
    borderColor: 'red',
    borderWidth: 2,
    backgroundColor: 'pink',
  },
  button: {
    width: '50%',
    height: 50,
    borderRadius: 20,
    padding: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  textInput: {
    textAlign: 'center',
  },
});

export default Subscribe;
