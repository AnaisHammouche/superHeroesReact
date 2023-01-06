import React, {useCallback, useEffect, useState} from 'react';
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

const App = () => {
  const [data, setData] = useState([]);

  const loadData = useCallback(async () => {
    console.log(1);
    let res = await api.getAllHeroes();
    setData(res.results);
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  if (!data) {
    return <Text>Chargement en cours ...</Text>;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        data={data}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.name}</Text>
              <Image
                source={{uri: item.image.url}}
                style={{width: 50, height: 50}}
                resizeMode="cover"></Image>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};
export default App;
