import React, { useCallback } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  NavigationContainer
} from 'react-native';


/* import AppNavigator from './src/components/navigators/AppNavigator'; */



const App = () => {
  // const{navigation} = props;


  // const goToLogIn = useCallback(() => {
  //   navigation.navigate('LogIn');

  // }, [navigation]);



  return (
    /* <NavigationContainer></NavigationContainer> */
      /* <AppNavigator /> */
    <SafeAreaView style={styles.screen}>
      <Image
        source={require('./src/home-picture.jpeg')}
        style={styles.homeImg}
      />

      <View style={styles.containerButtons}>
        <TouchableOpacity
          style={styles.homeButton}
          //  onPress={goTo}
        >
          <Text style={styles.texts}>Inscription</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.homeButton}
          //  onPress={goToLogIn}
        >
          <Text style={styles.texts}>Connexion</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  homeImg: {
    width: '100%',
    height: '70%',
  },
  containerButtons: {
    flex:1,
    flexDirection: 'column',
    justifyContent:'space-evenly',
    alignItems:'center',
  },
  homeButton: {
    borderWidth: 1,
    borderRadius: 30,
    width: '50%',
    height:'9%',
    borderColor: '#EEBB05',
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

  texts: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
