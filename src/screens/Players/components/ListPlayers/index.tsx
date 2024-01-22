import { ActivityIndicator, FlatList, View } from 'react-native';

import { Player } from './player';

import { Player as PPRops } from 'src/types';

import { ListEmpty } from '@components/ListEmpty';

type ListPlayersProps = {
  data: PPRops[];
  isLoading: boolean;
};

export const ListPlayers = ({ data = [], isLoading }: ListPlayersProps) => {
  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator className="text-green-primary" />
      </View>
    );
  }

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
