import { Text, View } from 'react-native';

import { User, X } from 'phosphor-react-native';

import { Player as PPRops } from 'src/types';

import { ButtonIcon } from '@components/ButtonIcon';

import { usePlayers } from '../../../../context/players';

type PlayerProps = {
  data: PPRops;
};

export const Player = ({ data }: PlayerProps) => {
  const { deletePlayer } = usePlayers();

  return (
    <View className="h-[54px] flex items-center flex-row pl-[15px] pr-[20px] bg-black-terciary rounded mb-[10px]">
      <User size={24} weight="fill" color="#C4C4CC" />

      <Text className="flex-1 text-gray-secondary pl-[10px]">{data.name}</Text>

      <ButtonIcon icon={<X size={24} color="#CC2937" />} onPress={() => deletePlayer(data.id)} />
    </View>
  );
};
