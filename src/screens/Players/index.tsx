import { View } from 'react-native';

import { Header, HighLight, TextField } from '@components/index';

import { Plus } from 'phosphor-react-native';

export default function Players() {
  return (
    <View>
      <Header showBackButton={true} />

      <HighLight title="Nome da turma" subtitle="adicione a galeria e separe os times" />

      <TextField placeholder="Nome da turma" className="mb-[20px]" iconEnd={<Plus size={32} />} />
    </View>
  );
}
