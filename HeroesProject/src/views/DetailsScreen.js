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

import styles from '../style/detailsScreenStyle';
import {handlePress} from 'react-native-paper/lib/typescript/components/RadioButton/utils';


const DetailsScreen = ({navigation, route}) => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const {idHero} = route.params;

  const loadData = useCallback(async () => {
    const res = await api.getHeroeBiography(idHero);
    const res2 = await api.getHeroeImage(idHero);
    setData(res);
    setData2(res2);
  }, [idHero]);
  const [isLiked, setIsLiked] = useState(false);

  const handlePress = () => {
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    loadData();
  }, [loadData]);

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
        <Text style={styles.pseudo}>Pseudonyme(s) : {data.aliases + ''}</Text>
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


export default DetailsScreen;
