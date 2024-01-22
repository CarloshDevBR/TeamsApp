import { useCallback, useState } from 'react';

import { ActivityIndicator, FlatList, View } from 'react-native';

import { GroupCard } from '../GroupCard';

import { ListEmpty } from '@components/ListEmpty';

import { getStorage } from '@storage/getStorage';

import { useFocusEffect } from '@react-navigation/native';

import { Group } from 'src/types';

import { KEY_GROUP } from '@constants/index';

export const ListGroups = () => {
  const [groups, setGrups] = useState<Group[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchGroups = useCallback(async () => {
    setIsLoading(true);

    const data: Group[] = await getStorage(KEY_GROUP);

    setGrups(data);

    setIsLoading(false);
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator className="text-green-primary" />
      </View>
    );
  }

  return (
    <FlatList
      data={groups}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ flex: 1 }}
      renderItem={({ item }) => <GroupCard data={item} />}
      ListEmptyComponent={<ListEmpty title="Crie uma nova turma" />}
    />
  );
};
