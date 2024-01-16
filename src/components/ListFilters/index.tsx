import { FlatList } from 'react-native';

import { Filter as Ft } from './filter';

import { Filter as FtProps } from 'src/types';

type ListFiltersProps = {
  data: FtProps[];
  containerStyles?: string;
  onPress?: (data: FtProps) => void;
};

export const ListFilters = ({ data = [], onPress, containerStyles }: ListFiltersProps) => {
  return (
    <FlatList
      className="mr-2"
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Ft data={item} isActive={item.active} onPress={onPress} />}
      horizontal
    />
  );
};
