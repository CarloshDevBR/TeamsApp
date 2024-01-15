import { UsersThree } from 'phosphor-react-native';

import { Text, TouchableOpacity, View } from 'react-native';

type GroupCardProps = {
  title: string;
};

export const GroupCard = ({ title }: GroupCardProps) => {
  return (
    <TouchableOpacity className="h-[96px] bg-black-terciary rounded-md mb-[10px]">
      <View className="flex-1 flex flex-row items-center ml-[29px]">
        <UsersThree color="#00B37E" size={32} weight="fill" />

        <Text className="text-gray-terciary ml-[20px]">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
