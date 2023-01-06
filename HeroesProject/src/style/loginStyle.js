import React from 'react';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
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

export default styles;
