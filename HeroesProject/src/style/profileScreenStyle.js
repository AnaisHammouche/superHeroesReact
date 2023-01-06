import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 40,
    alignSelf: 'center',
  },
  pp: {
    height: 200,
    width: 200,
    borderRadius: 400,
    backgroundColor: 'grey',
    borderColor: '#EEBB05',
  },
  texts: {
    color: 'grey',
  },
  placeholder: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  profilButton: {
    borderRadius: 30,
    width: '50%',
    height: '3%',
    backgroundColor: '#EEBB05',
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  textButton: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  scrollView: {
    backgroundColor: 'blue',
  },
});

export default styles;
