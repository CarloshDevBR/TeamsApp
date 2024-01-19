import { NavigationContainer } from '@react-navigation/native';

import { AppRouter } from './app.routes';

import { ContextProvider } from '../context';

export function Routes() {
  return (
    <NavigationContainer>
      <ContextProvider>
        <AppRouter />
      </ContextProvider>
    </NavigationContainer>
  );
}
