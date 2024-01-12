import { StatusBar } from 'expo-status-bar';

import Groups from '@screens/Groups';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { GlobalLoading } from '@components/GlobalLoading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) return <GlobalLoading />;

  return (
    <>
      <StatusBar backgroundColor="transparent" style="light" translucent />

      <Groups />
    </>
  );
}
