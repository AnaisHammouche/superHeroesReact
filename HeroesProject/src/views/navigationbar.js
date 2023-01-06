import {Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';



const NavigationBar = ({navigation}) => {

const Tab = createBottomTabNavigator();

  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Accueil" component={HomeScreen} onPress={() => {
  
        navigation.navigate('HomeScreen');
      }} />
        <Tab.Screen name="Recherche" component={SearchScreen}onPress={() => {

        navigation.navigate('SearchScreen');
      }} />
        <Tab.Screen name="Profil" component={ProfilScreen} onPress={() => {

        navigation.navigate('ProfilScreen');
      }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderRadius: 25,
    marginTop: 'auto',
    borderWidth: 1,
  },
  option: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
});

export default NavigationBar;
