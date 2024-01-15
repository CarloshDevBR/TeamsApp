import { Text, View } from 'react-native';

type ListEmptyProps = {
  title: string;
};

export const ListEmpty = ({ title }: ListEmptyProps) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-sm text-gray-primary text-center font-semibold">{title}</Text>
    </View>
  );
};
