import { SafeAreaView } from 'react-native-safe-area-context';

import { StatusBar } from 'expo-status-bar';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { GlobalLoading } from '@components/GlobalLoading';

import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) return <GlobalLoading />;

  return (
    <SafeAreaView className="flex-1 bg-black-five">
      <StatusBar backgroundColor="transparent" style="light" translucent />

      <Routes />
    </SafeAreaView>
  );
}
