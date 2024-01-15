import { FlatList } from 'react-native';

import { GroupCard } from '../GroupCard';

import { ListEmpty } from '@components/index';

import { Group } from 'src/types';

type ListGroupsProps = {
  data?: Group[];
};

export const ListGroups = ({ data = [] }: ListGroupsProps) => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={data}
      contentContainerStyle={data?.length === 0 && { flex: 1 }}
      renderItem={({ item }) => <GroupCard title={item.title} />}
      ListEmptyComponent={<ListEmpty title="Crie uma nova turma" />}
    />
  );
};
