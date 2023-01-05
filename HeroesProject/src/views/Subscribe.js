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

  const newUser = () => {};

  useEffect(() => {
    setPwdIsValid(pwd.length < 3 ? false : true);

    return () => {
      console.log('le composant va être détruit.');
    };
  }, [pwdIsValid, pwd, pwdConf]);

  const myOnPressFunction = useCallback(async () => {
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
        <Text style={styles.textInput} onPress={myOnPressFunction}>
          Envoyer
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Subscribe;

//  fileSystem.readFile()
/* const fileSystem = require("browserify-fs")

fileSystem.readFile("./client.json", (err, data) => {
 if(err) {
   console.log("File reading failed", err)
   return
 }
 console.log("File data:", data)
})


fileSystem.writeFile()

const fileSystem = require("browserify-fs")

const client = {
 "Name": "Mini Corp.",
 "Order_count": 83,
 "Address": "Little Havana"
}
const data = JSON.stringify(client)

console.log(data)

const fileSystem = require("browserify-fs")

const newUser = {
 "Id": id+1,
 "FirstName": "TestFirstName",
 "Name": "TestFamillyName"
 "Email": "test@test.com",
 "Password": "test",
 "Picture": "https://www.istockphoto.com/photo/beautiful-afro-girl-with-curly-hairstyle-gm1387523548-445440777?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Ffr%2Fs%2Fphotos%2Fprofile&utm_term=profile%3A%3A%3A"

}
const dataUserJSON = JSON.stringify(newUser)

console.log(dataUserJSON)

fileSystem.writeFile("./newClient.json", dataUserJSON, err=>{
 if(err){
   console.log("Error writing file" ,err)
 } else {
   console.log('JSON data is written to the file successfully')
 }
 */
