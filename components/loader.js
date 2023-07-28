import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

const Loader=() => {
return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
    <ActivityIndicator size={'large'} color={'blue'} visible="flase" />
    <Text style={{alignItems: 'center', fontSize: 20}}>Loading</Text>
    </View>
)
}  

export default Loader;