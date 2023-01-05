import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';


const LogInScreen = ({route, navigation}) => {
    const {title, quantity} = route.params;

    return (

        <SafeAreaView>
            <Text> Title : {title}</Text>
            <Text> Quantity : {quantity}</Text>
        </SafeAreaView>

    );



};

export default LogInScreen;