import { useNavigation } from '@react-navigation/native';

import { UsersThree } from 'phosphor-react-native';

import { Text, TouchableOpacity, View } from 'react-native';

import { Group } from 'src/types';

type GroupCardProps = {
  data: Group;
};

export const GroupCard = ({ data }: GroupCardProps) => {
  const navigation = useNavigation();

  const handlePlayers = () => {
    navigation.navigate('players', { id: data.id });
  };

  return (
    <TouchableOpacity className="h-[96px] bg-black-terciary rounded-md mb-[10px]" onPress={handlePlayers}>
      <View className="flex-1 flex flex-row items-center ml-[29px]">
        <UsersThree color="#00B37E" size={32} weight="fill" />

        <Text className="text-gray-terciary ml-[20px]">{data.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
