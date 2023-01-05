import React, {useCallback, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import api from '../api/api';

const LogIn = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const loadData = useCallback(async () => {
    const res = await api.getHeroeBiography(70);
    const res2 = await api.getHeroeImage(70);
    setData(res);
    setData2(res2);
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Image />
        <Text>Biographie du héro</Text>
        <Image
          source={{
            uri: data2.url,
          }}
          style={{width: 100, height: 100}}
          resizeMode={'cover'}></Image>
        <Text>Nom : {data['name'] + ''}</Text>
        <Text>Alter ego : {data['alter-egos'] + ''}</Text>
        <Text>Pseudonyme(s) : {data['aliases'] + ''}</Text>
        <Text>Lieu de naissance : {data['place-of-birth'] + ''}</Text>
        <Text>Première apparition : {data['first-appearance'] + ''}</Text>
        <Text>Publié par : {data['publisher'] + ''}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: '30%',
  },
});

export default LogIn;
