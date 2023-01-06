import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from '../style/searchScreenStyle';
import api from '../api/api';
const SearchBar = () => {
  const [data, setData] = useState([]);
  const [inputSearch, setInputSearch] = useState('');

  const loadData = useCallback(async () => {
    let res = await api.heroSearch(inputSearch);
    if (!res.results) {
      return;
    }
    setData(res.results);
  }, [inputSearch]);

  const goToDetailHero = useCallback(async () => {
    /*  const navigation = useNavigation();
        navigation.navigate('HeroesScreen'); */
    alert('bouton cliqué !');
  });

  const dataFilter = useMemo(() => {
    return data.filter(o => o.name.includes(inputSearch));
  }, [data, inputSearch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="QUEL HÉROS RECHERCHEZ-VOUS ? "
        onChangeText={setInputSearch}
        value={inputSearch}
      />
      <View style={styles.arrowContainer}>
        <View style={styles.arrow1} />
      </View>
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
        data={dataFilter}
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

export default SearchBar;
