import { View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import Groups from '@screens/Groups';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <>
      <StatusBar style="auto" />

      <Groups />
    </>
  );
}
