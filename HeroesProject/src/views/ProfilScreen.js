import React, { useState, useEffect } from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity, Image, View} from 'react-native';

const ProfilScreen = () => {



  return (
    <SafeAreaView style={styles.screen}>
       
      <Text style={styles.title}>PROFIL</Text>
      <Image style={styles.pp} source={require('../assets/home-picture.jpeg')}></Image>
      <Text style={styles.texts}>Nom d'utilisateur</Text>
      <View style={styles.placeholder}>
      <Text >Remplacer avec le bon PROPS</Text>
     </View>
      <TouchableOpacity style={styles.profilButton}>
        <Text style={styles.textButton}>
            INVITER UN AMI
        </Text></TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent:'space-evenly',
    alignItems:'center',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 40,
    alignSelf: 'center',
  },
  pp: {
    height: 200,
    width:200,
    borderRadius: 400,
  },
  texts: {
    color: 'grey',
    
  },
  placeholder: {
    borderBottomColor:'black',
    borderBottomWidth: 1,
  },
  profilButton: {
    borderRadius: 30,
    width: '50%',
    height:'3%',
    backgroundColor: '#EEBB05',
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  textButton: {
    fontWeight: 'bold',
    textAlign: 'center',
    color:'white',

  }

});

export default ProfilScreen;
