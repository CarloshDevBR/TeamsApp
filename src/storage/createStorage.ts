import AsyncStorage from '@react-native-async-storage/async-storage';

type CreateStorageProps<T> = {
  key: string;
  value: T;
};

export const createStorage = async <T>({ key, value }: CreateStorageProps<T>): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    throw err;
  }
};
