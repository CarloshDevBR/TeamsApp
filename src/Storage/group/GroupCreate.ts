import AsyncStorage from '@react-native-async-storage/async-storage';

import { KeyGroup } from '../configTypes';

import { GroupGetAll } from './GroupGetAll';

import { Group } from 'src/types';

export const GroupCreate = async (newGroup: Group) => {
  try {
    const groups = await GroupGetAll();

    if (alreadyExistsGroup(newGroup, groups)) {
      throw new Error('Já existe um grupo com esse');
    }

    const transformedJson = JSON.stringify([...groups, newGroup]);

    await AsyncStorage.setItem(KeyGroup, transformedJson);
  } catch (err) {
    throw err;
  }
};

const alreadyExistsGroup = (newGroup: Group, groups: Group[]) => {
  const indexGroup = groups.findIndex((e) => e.id === newGroup.id);

  const indexDontFindGroup = -1;

  return indexGroup !== indexDontFindGroup;
};
