import { useState } from 'react';

import { Alert, View } from 'react-native';

import { UsersThree } from 'phosphor-react-native';

import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { TextField } from '@components/TextField';
import { Button } from '@components/Button';

import { createStorage } from '@storage/createStorage';

import { AppError } from '@utils/AppError';

import { getStorage } from '@storage/getStorage';

import { KEY_GROUP } from '@constants/index';

import { Group } from 'src/types';

import { verifyAlreadyExistsItemOnList } from '@functions/verifyAlreadyExistsItemOnList';

export default function NewGroup() {
  const [group, setGroup] = useState<string>('');

  const navigation = useNavigation();

  const handleAddNewGroup = async () => {
    if (group.trim() === '') {
      return Alert.alert('Atenção', 'Digite um nome para o seu grupo');
    }

    const data: Group[] = await getStorage(KEY_GROUP);

    if (verifyAlreadyExistsItemOnList({ list: data, callBack: (item) => item.title === group })) {
      throw new AppError('Já existe um grupo com esse nome');
    }

    const id = `key-${Math.random()}`;

    await createStorage({ key: KEY_GROUP, value: [...data, { id, title: group }] });

    navigation.navigate('players', { id });
  };

  return (
    <View className="flex-1 bg-black-five px-[19px] pb-[10px]">
      <Header showBackButton={true} />

      <View className="flex flex-1 justify-center">
        <View className="flex items-center">
          <UsersThree color="#00B37E" size={56} />
        </View>

        <HighLight title="Nova turma" subtitle="crie uma turma para adicionar pessoas" />

        <TextField
          placeholder="Nome da turma"
          containerStyles="mb-[20px]"
          onChangeText={(value) => setGroup(value)}
          onSubmitEditing={handleAddNewGroup}
          returnKeyType="done"
        />

        <Button title="Criar" onPress={handleAddNewGroup} />
      </View>
    </View>
  );
}
