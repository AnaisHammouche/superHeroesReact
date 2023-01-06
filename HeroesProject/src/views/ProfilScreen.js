import React, { useState, useEffect, useCallback } from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity, Image, View, Fragment, StatusBar} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';


const ProfilScreen = () => {


  const addPhoto = () => { 
    ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    console.log(image);
  });
};

  
    

  return (
    <SafeAreaView style={styles.screen}>
       
      <Text style={styles.title}>PROFIL</Text>

<TouchableOpacity style= {styles.pp} onPress={addPhoto}>
  </TouchableOpacity>      

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
    backgroundColor: 'grey',
    borderColor: '#EEBB05',
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

  },
  scrollView: {
    backgroundColor: 'blue',
  },

  /* body: {
    backgroundColor: 'white',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: Dimensions.get('screen').height - 20,
    width: Dimensions.get('screen').width
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center'
  },
  images: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3
  },
  btnParentSection: {
    alignItems: 'center',
    marginTop:10
  },
  btnSection: {
    width: 225,
    height: 50,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom:10
  },
  btnText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    fontWeight:'bold'
  } */

});

export default ProfilScreen;
