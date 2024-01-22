import { useCallback, useEffect, useState } from 'react';

import { Text, View } from 'react-native';

import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

import { Plus } from 'phosphor-react-native';

import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { TextField } from '@components/TextField';
import { ListFilters } from '@components/ListFilters';
import { Button } from '@components/Button';

import { ListPlayers } from './components/ListPlayers';

import { Group, Player, Team } from 'src/types';

import { getStorage } from '@storage/getStorage';
import { createStorage } from '@storage/createStorage';

import { KEY_GROUP } from '@constants/index';

import { takeItemOnList } from '@functions/takeItemOnList';
import { deleteItemOnList } from '@functions/deleteItemOnList';

import { usePlayers } from '../../context/players';

type RouteParams = {
  id: string;
};

export default function Players() {
  const [timeSelected, setTimeSeleceted] = useState<Team>({
    id: '1',
    title: 'Time A',
  });
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);
  const [group, setGroup] = useState<Group | null>(null);
  const [newPlayer, setNewPlayer] = useState<string>('');

  const navigation = useNavigation();

  const route = useRoute();

  const { players, getPlayers, addPlayer, isLoading } = usePlayers();

  const { id } = route.params as RouteParams;

  const fetchGroup = useCallback(async () => {
    const data: Group[] = await getStorage(KEY_GROUP);

    const group = takeItemOnList({ id, list: data });

    setGroup(group || null);
  }, []);

  const handleDeleteGroup = async () => {
    const data: Group[] = await getStorage(KEY_GROUP);

    const newList = deleteItemOnList({ id, list: data });

    await createStorage({ key: KEY_GROUP, value: newList });

    navigation.navigate('groups');
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroup();

      getPlayers(id);
    }, [])
  );

  useEffect(() => {
    const filterTimePlayers = () => {
      const newData = players.filter((item) => item.team.id === timeSelected.id);

      setFilteredPlayers(newData);

      setNewPlayer('');
    };

    filterTimePlayers();
  }, [players, timeSelected]);

  return (
    <View className="flex-1 bg-black-five px-[19px] pb-[10px]">
      <Header showBackButton={true} />

      <View className="flex-1 mb-2">
        <HighLight title={group?.title ?? 'Nome da turma'} subtitle="adicione a galera e separe os times" />

        <TextField
          placeholder="Nome do participante"
          containerStyles="mb-[20px]"
          iconEnd={<Plus size={32} color="#00875F" />}
          value={newPlayer}
          onChangeText={(value) => setNewPlayer(value)}
          onPressButton={() => addPlayer({ id: `key-${Math.random()}`, name: newPlayer, team: timeSelected, groupId: id })}
        />

        <View className="flex flex-row mb-5">
          <ListFilters
            data={[
              {
                id: '1',
                title: 'Time A',
              },
              {
                id: '2',
                title: 'Time B',
              },
            ]}
            onSelectFilter={(value) => setTimeSeleceted(value)}
          />

          <View className="h-[38px] w-4 flex flex-row items-center justify-center">
            <Text className="text-sm text-white font-semibold">{filteredPlayers.length}</Text>
          </View>
        </View>

        <ListPlayers data={filteredPlayers} isLoading={isLoading} />
      </View>

      <Button title="Remover turma" className="bg-red-primary" onPress={handleDeleteGroup} />
    </View>
  );
}
