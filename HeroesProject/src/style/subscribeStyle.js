import React from 'react';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
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
    //color: 'black',
    fontSize: 20,
    borderRadius: 10,
    padding: 10,
    borderColor: '#EEBB05',
    borderWidth: 2,
    //backgroundColor: '#EEBB05',
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
    // backgroundColor: '#EEBB05',
  },
  button: {
    width: '50%',
    height: 50,
    borderRadius: 20,
    padding: 10,
    borderColor: '#EEBB05',
    borderWidth: 2,
    backgroundColor: '#EEBB05',
  },
  textInput: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
  },
});

export default styles;
