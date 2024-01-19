import { PlayersProvider } from './players';

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <PlayersProvider>{children}</PlayersProvider>;
};
