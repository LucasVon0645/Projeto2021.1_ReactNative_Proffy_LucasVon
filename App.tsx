import React from 'react';

import AppLoading from './node_modules/expo-app-loading/build';

import {Poppins_400Regular, Poppins_600SemiBold, useFonts} from '@expo-google-fonts/poppins'
import {Archivo_400Regular, Archivo_500Medium, Archivo_700Bold} from '@expo-google-fonts/archivo'
import AppStack from './src/routes/AppStack';
import {StatusBar} from 'expo-status-bar'

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_700Bold
  })

if(!fontsLoaded) {

  return <AppLoading />
}

else {


  return (
    <>
      <StatusBar style="light"/>
      <AppStack/>
    </>)}
}
