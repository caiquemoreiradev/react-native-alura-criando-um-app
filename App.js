import React from 'react';
import { StatusBar, SafeAreaView} from 'react-native';
import { 
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading';

import Home from './src/telas/Movie';
import mocks from './src/mocks/movie';

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada){
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Home {...mocks} />
    </SafeAreaView>
  );
}
