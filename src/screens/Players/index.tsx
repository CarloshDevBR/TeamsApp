import { Text, View } from 'react-native';

import { useRoute } from '@react-navigation/native';

import { Plus } from 'phosphor-react-native';

import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { TextField } from '@components/TextField';
import { ListFilters } from '@components/ListFilters';
import { Button } from '@components/Button';

import { ListPlayers } from './components/ListPlayers';

type RouteParams = {
  group: string;
};

export default function Players() {
  const route = useRoute();

  const { group } = route.params as RouteParams;

  return (
    <View className="flex-1 bg-black-five px-[19px] pb-[10px]">
      <Header showBackButton={true} />

      <View className="flex-1 mb-2">
        <HighLight title={group} subtitle="adicione a galera e separe os times" />

        <TextField placeholder="Nome do participante" containerStyles="mb-[20px]" iconEnd={<Plus size={32} color="#00875F" />} />

        <View className="flex flex-row mb-5">
          <ListFilters containerStyles="mb-5" onPress={(item) => console.log(item)} />

          <View className="h-[38px] w-4 flex flex-row items-center justify-center">
            <Text className="text-sm text-white font-semibold">2</Text>
          </View>
        </View>

        <ListPlayers />
      </View>

      <Button title="Remover turma" className="bg-red-primary" />
    </View>
  );
}
