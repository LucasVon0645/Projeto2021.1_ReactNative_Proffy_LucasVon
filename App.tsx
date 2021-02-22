import React from 'react';

import AppLoading from './node_modules/expo-app-loading/build';

import {Poppins_400Regular, Poppins_600SemiBold, useFonts} from '@expo-google-fonts/poppins'
import AppStack from './src/routes/AppStack';

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
    <>
      <AppStack/>
    </>)}
}
