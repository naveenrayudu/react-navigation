import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import AppNavigator from './navigations/MealsNavigator';

const loadFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

enableScreens();

export default function App() {
  const [isPreSettingApp, setIsPreSettingApp] = useState(true);

  if(isPreSettingApp)
    return <AppLoading startAsync={loadFonts} onFinish={() => setIsPreSettingApp(false)} />


  return <AppNavigator />;
}