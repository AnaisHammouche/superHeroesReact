import React, {useState, useEffect, useCallback} from 'react';
import styles from '../style/profileScreenStyle';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Fragment,
  StatusBar,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const ProfilScreen = () => {
  const addPhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>PROFIL</Text>

      <TouchableOpacity style={styles.pp} onPress={addPhoto}></TouchableOpacity>

      <Text style={styles.texts}>Nom d'utilisateur</Text>
      <View style={styles.placeholder}>
        <Text>Remplacer avec le bon PROPS</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfilScreen;
