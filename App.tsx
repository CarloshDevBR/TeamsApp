import { View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import Groups from '@screens/Groups';
import NewGroup from '@screens/NewGroup';
import Players from '@screens/Players';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { GlobalLoading } from '@components/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) return <GlobalLoading />;

  return (
    <View className="flex-1 bg-black-five px-[19px]">
      <StatusBar backgroundColor="transparent" style="light" translucent />

      <Players />
    </View>
  );
}
