import React, {useCallback} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

import styles from '../style/homeScreenStyle';
import ReadMeScreen from './ReadMeScreen';

import {useNavigation} from '@react-navigation/native';

import ProfilScreen from './ProfilScreen';

const App = ({navigation: {navigate}}) => {
  const navigation = useNavigation();

  const goToLoginPage = useCallback(() => {
    navigate('Connexion', );
  }, [navigate]);


  const goToSubscribe = useCallback(() => {
    console.log('navigation : ' + {navigation});
    navigate('Inscription', {title: 'lulu', quantity: 20});
  }, [navigation]);

  /* return (
  <ReadMeScreen/>
) */

  /* return (
  <ProfilScreen/>
); */

  return (
    <SafeAreaView style={styles.screen}>
      <Image
        source={require('../assets/home-picture.jpeg')}
        style={styles.homeImg}
      />

      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.homeButton} onPress={goToSubscribe}>
          <Text style={styles.texts}>Inscription</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.homeButton} onPress={goToLoginPage}>
          <Text style={styles.texts}>Connexion</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
