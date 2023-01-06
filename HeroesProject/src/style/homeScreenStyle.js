import React from 'react';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  homeImg: {
    width: '100%',
    height: '70%',
  },
  containerButtons: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  homeButton: {
    borderRadius: 30,
    width: '50%',
    height: '9%',
    backgroundColor: '#EEBB05',
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

  texts: {
    fontWeight: 'bold',
    color:'white',
    textAlign: 'center',
  },
});

export default styles;
