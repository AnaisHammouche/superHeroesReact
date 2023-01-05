import {Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';

const NavigationBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.text}>Accueil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.text}>Recherche</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.text}>Profil</Text>
      </TouchableOpacity>
    </SafeAreaView>
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