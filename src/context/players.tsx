import { useContext, createContext, useCallback, useState } from 'react';

import { KEY_PLAYERS } from '@constants/index';

import { useFocusEffect } from '@react-navigation/native';

import { getStorage } from '@storage/getStorage';

import { Player } from 'src/types';

import { createStorage } from '@storage/createStorage';
import { deleteItemOnList } from '@functions/deleteItemOnList';

interface PlayersContext {
  players: Player[];
  addPlayer: (newPlayer: Player) => Promise<void>;
  deletePlayer: (id: string) => Promise<void>;
}

const PlayersContext = createContext<PlayersContext>({
  players: [],
  addPlayer: async () => {},
  deletePlayer: async () => {},
});

export const PlayersProvider = ({ children }: { children: React.ReactNode }) => {
  const [players, setPlayers] = useState<Player[]>([]);

  const fetchPlayers = useCallback(async () => {
    const data: Player[] = await getStorage(KEY_PLAYERS);

    setPlayers(data);
  }, []);

  const addPlayer = async (newPlayer: Player) => {
    if (newPlayer.name) {
      const newArray: Player[] = [...players, newPlayer];

      setPlayers(newArray);

      await createStorage({ key: KEY_PLAYERS, value: newArray });
    }
  };

  const deletePlayer = async (id: string) => {
    const removedPlayerOnList: Player[] = deleteItemOnList({ id, list: players });

    setPlayers(removedPlayerOnList);

    await createStorage({ key: KEY_PLAYERS, value: removedPlayerOnList });
  };

  useFocusEffect(
    useCallback(() => {
      fetchPlayers();
    }, [])
  );

  return <PlayersContext.Provider value={{ players, addPlayer, deletePlayer }}>{children}</PlayersContext.Provider>;
};

export const usePlayers = () => {
  return useContext(PlayersContext);
};
