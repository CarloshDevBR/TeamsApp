import { Text, View } from 'react-native';

type HighLightProps = {
  title: string;
  subtitle: string;
};

export const HighLight = ({ title, subtitle }: HighLightProps) => {
  return (
    <View className="w-full my-[32px]">
      <Text className="text-xl text-white text-center font-semibold">{title}</Text>

      <Text className="text-gray-primary text-center">{subtitle}</Text>
    </View>
  );
};
