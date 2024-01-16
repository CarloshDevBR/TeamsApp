import { useCallback, useEffect, useState } from 'react';

import { FlatList } from 'react-native';

import { GroupCard } from '../GroupCard';

import { ListEmpty } from '@components/ListEmpty';

import { GroupGetAll } from 'src/Storage/group/GroupGetAll';

import { useFocusEffect } from '@react-navigation/native';

import { Group } from 'src/types';

export const ListGroups = () => {
  const [groups, setGrups] = useState<Group[]>();

  const fetchGroups = useCallback(async () => {
    const data = await GroupGetAll();

    setGrups(data);
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={groups}
      contentContainerStyle={groups?.length === 0 && { flex: 1 }}
      renderItem={({ item }) => <GroupCard title={item.title} />}
      ListEmptyComponent={<ListEmpty title="Crie uma nova turma" />}
    />
  );
};
