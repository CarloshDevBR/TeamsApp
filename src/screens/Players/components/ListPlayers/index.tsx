import { FlatList } from 'react-native';

import { Player } from './player';

import { Player as PPRops } from 'src/types';

import { ListEmpty } from '@components/ListEmpty';

type ListPlayersProps = {
  data: PPRops[];
};

export const ListPlayers = ({ data = [] }: ListPlayersProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Player data={item} />}
      ListEmptyComponent={<ListEmpty title="Não há pessoas nesse time." />}
      contentContainerStyle={{ flex: 1 }}
    />
  );
};
