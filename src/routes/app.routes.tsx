import { ROUTES } from './routes';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRouter() {
  return (
    <Navigator initialRouteName="groups" screenOptions={{ headerShown: false }}>
      {ROUTES.map((item) => (
        <Screen key={item.name} name={item.name} component={item.page} />
      ))}
    </Navigator>
  );
}
