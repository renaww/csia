//The following components were imported (basic react native elements)
import React, { useState } from "react";
import { Modal, Text, View, Button, Image, TouchableHighlight, Pressable, ScrollView, SafeAreaView} from 'react-native';
//Import self-created stylesheet
import { global } from './styles/global';
//Used the external react native navigation library
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function App() {
  return (
    <View style={global.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

