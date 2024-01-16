import AsyncStorage from '@react-native-async-storage/async-storage';

import { KeyGroup } from '../configTypes';

import { Group } from 'src/types';

export const GroupGetAll = async () => {
  try {
    const groups = await AsyncStorage.getItem(KeyGroup);

    const parsedJson: Group[] = JSON.parse(groups ?? '');

    return parsedJson;
  } catch (err) {
    throw err;
  }
};
