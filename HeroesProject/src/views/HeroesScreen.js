import React, {useCallback, useEffect, useState} from 'react';
import styles from '../style/heroesScreenStyle';
import {useNavigation} from '@react-navigation/native';

import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  NavigationContainer,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';

import api from '../api/api';

const HeroesScreen = () => {
  const [data, setData] = useState([]);
//  const navigation = useNavigation();

  const loadData = useCallback(async () => {
    console.log(1);
    let res = await api.getAllHeroes();
    setData(res.results);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (!data) {
    return <Text>Chargement en cours ...</Text>;
  }

  const goToDetailHero = useCallback(async () => {
    /*  const navigation = useNavigation();
    navigation.navigate('HeroesScreen'); */
    alert('bouton cliqué !');
  });

 /* const gotToProfil = useCallback(() => {
    navigation.navigate('ProfilScreen');
  }, []);*/

  return (
    <SafeAreaView>
      <TouchableOpacity /*{onPress: {goToProfil}*/>
        <Text>Profil</Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          textTransform: 'uppercase',
          marginLeft: 50,
        }}>
        Liste des SuperHéros
      </Text>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={goToDetailHero}>
              <View style={styles.view}>
                <Text style={styles.title}>{item.name}</Text>
                <Image
                  source={{uri: item.image.url}}
                  style={styles.picture}
                  resizeMode="cover"
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};
export default HeroesScreen;
