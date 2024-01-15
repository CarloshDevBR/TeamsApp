import { View } from 'react-native';

import { Button, Header, HighLight } from '@components/index';

import { ListGroups } from './components/ListGroups';

export default function Groups() {
  return (
    <View className="flex-1 mx-[19px] pb-[10px]">
      <Header />

      <HighLight title="Turmas" subtitle="jogue com a sua turma" />

      <ListGroups />

      <Button title="Criar nova turma" />
    </View>
  );
}
