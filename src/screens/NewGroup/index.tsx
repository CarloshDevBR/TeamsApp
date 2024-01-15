import { View } from 'react-native';

import { UsersThree } from 'phosphor-react-native';

import { HighLight, Header, Button, TextField } from '@components/index';

export default function NewGroup() {
  return (
    <View className="flex-1">
      <Header showBackButton={true} />

      <View className="flex flex-1 justify-center">
        <View className="flex items-center">
          <UsersThree color="#00B37E" size={56} />
        </View>

        <HighLight title="Nova turma" subtitle="crie uma turma para adicionar pessoas" />

        <TextField placeholder="Nome da turma" className="mb-[20px]" />

        <Button title="Criar" />
      </View>
    </View>
  );
}
