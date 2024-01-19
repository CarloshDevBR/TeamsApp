import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorage = async <T>(key: string): Promise<T[]> => {
  try {
    const storage = await AsyncStorage.getItem(key);

    const parsedJson = JSON.parse(storage ?? '[]');

    return parsedJson;
  } catch (err) {
    throw err;
  }
};
