import React from 'react';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  picture: {
    width: 150,
    height: 150,
    borderRadius: 80,
    marginBottom: 40,
  },
});

export default styles;
