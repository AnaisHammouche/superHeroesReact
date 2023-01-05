import React, {useCallback} from 'react';
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
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>CONNEXION</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.textInput}>Nom d'utilisateur</Text>
          <TextInput style={styles.input} />
          <Text style={styles.textInput}>Mot de passe</Text>
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
          <Text style={styles.textConnection}>Connexion</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: '30%',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    marginTop: '30%',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
  },
  textInput: {
    marginLeft: 39,
  },
  input: {
    marginBottom: 20,
    width: '80%',
    height: 40,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    alignSelf: 'center',
  },
  connectButtonsContainer: {
    flexDirection: 'row',
  },
  connectButtons: {
    marginRight: 40,
    marginLeft: 40,
    width: 75,
    height: 75,
  },
  button: {
    borderRadius: 30,
    width: '50%',
    height: 40,
    backgroundColor: '#EEBB05',
    shadowOpacity: 0.29,
    elevation: 7,
  },
  textConnection: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginTop: 9,
  },
});

export default LogIn;
