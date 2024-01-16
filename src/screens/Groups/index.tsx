import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { ListGroups } from './components/ListGroups';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { Button } from '@components/Button';

export default function Groups() {
  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate('new');
  };

  return (
    <View className="flex-1 bg-black-five px-[19px] pb-[10px]">
      <Header />

      <HighLight title="Turmas" subtitle="jogue com a sua turma" />

      <ListGroups />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </View>
  );
}
