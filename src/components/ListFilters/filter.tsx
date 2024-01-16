import { Text, TouchableOpacity } from 'react-native';

import { Filter as FtProps } from 'src/types';

type FilterProps = {
  data: FtProps;
  isActive: boolean;
  onPress?: (data: FtProps) => void;
};

export const Filter = ({ data, isActive, onPress }: FilterProps) => {
  return (
    <TouchableOpacity
      onPress={() => onPress && onPress(data)}
      className={`w-[70px] h-[38px] flex justify-center items-center ${isActive && 'border border-green-primary'} rounded`}
    >
      <Text className="text-sm text-white font-semibold uppercase">{data.title}</Text>
    </TouchableOpacity>
  );
};
