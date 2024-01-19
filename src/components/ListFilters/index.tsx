import { useState } from 'react';

import { FlatList } from 'react-native';

import { Filter as Ft } from './filter';

import { Filter as FtProps, Time } from 'src/types';

type ListFiltersProps = {
  data: FtProps[];
  onSelectFilter: (item: Time) => void;
};

export const ListFilters = ({ data = [], onSelectFilter }: ListFiltersProps) => {
  const [selected, setSelected] = useState<string>(data[0].id || '');

  return (
    <FlatList
      className="mr-2"
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Ft
          data={item}
          isActive={item.id === selected}
          onPress={(item) => {
            setSelected(item.id);

            onSelectFilter(item);
          }}
        />
      )}
      horizontal
    />
  );
};
