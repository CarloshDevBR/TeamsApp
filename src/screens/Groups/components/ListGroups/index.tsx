import { useCallback, useState } from 'react';

import { FlatList } from 'react-native';

import { GroupCard } from '../GroupCard';

import { ListEmpty } from '@components/ListEmpty';

import { getStorage } from '@storage/getStorage';

import { useFocusEffect } from '@react-navigation/native';

import { Group } from 'src/types';

import { KEY_GROUP } from '@constants/index';

export const ListGroups = () => {
  const [groups, setGrups] = useState<Group[]>();

  const fetchGroups = useCallback(async () => {
    const data: Group[] = await getStorage(KEY_GROUP);

    setGrups(data);
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

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
