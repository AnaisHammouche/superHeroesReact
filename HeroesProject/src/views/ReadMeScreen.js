import React from 'react';
import {SafeAreaView, Text, StyleSheet, ScrollView} from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';

const ReadMeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
      <Card style={styles.container}>
        <Card.Content>
            <Title style={styles.title}>À PROPOS</Title>
        </Card.Content>
        <Card.Cover style={styles.img} source={require('../assets/heross.jpeg')} />
       <Card.Content>
        <Paragraph style={styles.content}>{"\n"}API : https://superheroapi.com/ {"\n"}
          <Text>{"\n"} Cette application permet de : {"\n"}
        - S'inscrire{"\n"}- Se connecter{"\n"}- Consulter son profil{"\n"}- Inviter un ami {"\n"}- Se
        prendre en photo{"\n"}- Lister des super héros{"\n"}- Consulter leurs biographies
        et leurs détails {"\n"}- Rechercher un héro {"\n"}- Liker et noter ses héros favoris{"\n"}</Text>
        <Text>{"\n"}Les modules utilisés au sein de cette application sont : </Text>
     </Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.container}>
        <Paragraph style={styles.contents}>
          Ce projet est
        développé par : Claire MATHIRON, Anaïs HAMMOUCHE, Loïc GOURIOU, Mickael
        BARTHEMY & Théodule JANCHEN.</Paragraph>
      </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container :{
    alignContent:'center',
    margin:20
},
title: {
  fontWeight: 'bold',
},
content:{
  flexDirection: 'column',
  textAlign: 'justify',
},
contents: {
 padding : 14,
 fontWeight: 'bold',
 textAlign: 'justify'
}

});

export default ReadMeScreen;
