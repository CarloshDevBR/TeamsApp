import { AppRouter } from './app.routes';

import { NavigationContainer } from '@react-navigation/native';

export function Routes() {
  return (
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>
  );
}
