import React from 'react';
import {View, TextInput, StyleSheet, SafeAreaView} from 'react-native';

const SearchBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="QUEL HÉRO RECHERCHEZ-VOUS ? "
      />
      <View style={styles.arrowContainer}>
        <View style={styles.arrow1} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.1,
  },
  input: {
    flex: 0.1,
    fontSize: 14,
  },
  arrowContainer: {
    width: 40,
    height: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  arrow1: {
    width: 200,
    height: 4,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderLeftColor: 'transparent',
    transform: [{rotate: '180deg'}],
  },
});
export default SearchBar;
