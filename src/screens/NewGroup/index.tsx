import { useState } from 'react';

import { View } from 'react-native';

import { UsersThree } from 'phosphor-react-native';

import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { TextField } from '@components/TextField';
import { Button } from '@components/Button';

import { GroupCreate } from 'src/Storage/group/GroupCreate';

export default function NewGroup() {
  const [group, setGroup] = useState<string>('');

  const navigation = useNavigation();

  const handlePlayer = async () => {
    try {
      await GroupCreate({ id: `key-${Math.random()}`, title: group });

      navigation.navigate('players', { group });
    } catch (err) {
      throw err;
    }
  };

  return (
    <View className="flex-1 bg-black-five px-[19px] pb-[10px]">
      <Header showBackButton={true} />

      <View className="flex flex-1 justify-center">
        <View className="flex items-center">
          <UsersThree color="#00B37E" size={56} />
        </View>

        <HighLight title="Nova turma" subtitle="crie uma turma para adicionar pessoas" />

        <TextField placeholder="Nome da turma" containerStyles="mb-[20px]" onChangeText={(value) => setGroup(value)} />

        <Button title="Criar" onPress={handlePlayer} />
      </View>
    </View>
  );
}
