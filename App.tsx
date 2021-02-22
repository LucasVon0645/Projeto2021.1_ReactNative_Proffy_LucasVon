import React from 'react';
import { View } from 'react-native';

import Landing from './src/pages/Landing/index'
import {AppLoading} from 'expo';

import {Poppins_400Regular, Poppins_600SemiBold, useFonts} from '@expo-google-fonts/poppins'
import AppStack from './src/routes/AppStack.tsx';

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  })

if(!fontsLoaded) {
  return <AppLoading />
}

else {


  return (
    <View>
      <AppStack/>
    </View>
  );}
}
