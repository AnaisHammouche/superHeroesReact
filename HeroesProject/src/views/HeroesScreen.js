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
        style={{
          flex: 1,
          width: 170,
          height: 170,
          borderWidth: 5,
          borderColor: '#fff',
          flexDirection: 'column',
          marginTop: '10%',
          marginLeft: 140,
        }}
        data={data}
        renderItem={({item}) => {
          return (
            <View>
              <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 40}}>
                {item.name}
              </Text>
              <Image
                source={{uri: item.image.url}}
                style={{width: 100, height: 100, borderRadius: 100}}
                resizeMode="cover"
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};
export default App;
