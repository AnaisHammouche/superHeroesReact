import React, {useCallback, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import api from '../api/api';
import {handlePress} from 'react-native-paper/lib/typescript/components/RadioButton/utils';

const LogIn = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const loadData = useCallback(async () => {
    const res = await api.getHeroeBiography(70);
    const res2 = await api.getHeroeImage(70);
    setData(res);
    setData2(res2);
  }, []);
  const [isLiked, setIsLiked] = useState(false);

  const handlePress = () => {
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container1}>
        <Image />
        <Image
          source={{
            uri: data2.url,
          }}
          style={styles.image}
          resizeMode={'cover'}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.nom}>{data.name + ''}</Text>
        <TouchableOpacity onPress={handlePress}>
          {isLiked ? (
            <Text style={[styles.coeur, styles.liked]}>❤️</Text>
          ) : (
            <Text style={styles.coeur}>🖤</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.title}>Biographie du héro</Text>
        <Text style={styles.ego}>Alter ego : {data['alter-egos'] + ''}</Text>
        <Text style={styles.psd}>Pseudonyme(s) : {data.aliases + ''}</Text>
        <Text style={styles.date}>
          Lieu de naissance : {data['place-of-birth'] + ''}
        </Text>
        <Text style={styles.apparition}>
          Premiere apparition : {data['first-appearance'] + ''}
        </Text>
        <Text style={styles.publication}>
          Publié par : {data.publisher + ''}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container1: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10%',
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginBottom: '30%',
    marginLeft: '5%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'grey',
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#fff',
  },
  nom: {
    fontSize: 35,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  ego: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'grey',
    marginBottom: 25,
    marginTop: 25,
  },
  psd: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'grey',
    marginBottom: 25,
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'grey',
    marginBottom: 25,
  },
  apparition: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'grey',
    marginBottom: 25,
  },
  publication: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'grey',
    marginBottom: 25,
  },
  container3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    marginLeft: 250,
    flexDirection: 'row',
  },
  coeur: {
    fontSize: 40,
    marginBottom: 25,
    marginTop: 25,
  },
  liked: {
    color: 'red',
  },
});

export default LogIn;
