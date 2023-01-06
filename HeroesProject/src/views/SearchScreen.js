import React from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import styles from '../style/searchScreenStyle';

const SearchBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="QUEL HÉROS RECHERCHEZ-VOUS ? "
      />
      <View style={styles.arrowContainer}>
        <View style={styles.arrow1} />
      </View>
    </SafeAreaView>
  );
};

export default SearchBar;
