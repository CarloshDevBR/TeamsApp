import { ActivityIndicator, View } from 'react-native';

export const GlobalLoading = () => {
  return (
    <View className="flex-1 items-center justify-center bg-gray-primary">
      <ActivityIndicator className="text-green-primary" />
    </View>
  );
};
