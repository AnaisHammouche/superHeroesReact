import React from 'react';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container1: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10%',
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginBottom: '30%',
    marginLeft: '5%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'grey',
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#fff',
  },
  nom: {
    fontSize: 35,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  ego: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'grey',
  },
  pseudo: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'grey',
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'grey',
  },
  apparition: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'grey',
  },
  publication: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'grey',
  },
});

export default styles;
