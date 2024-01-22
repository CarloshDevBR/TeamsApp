import { useContext, createContext, useCallback, useState, useEffect } from 'react';

import { KEY_PLAYERS } from '@constants/index';

import { getStorage } from '@storage/getStorage';

import { Player } from 'src/types';

import { createStorage } from '@storage/createStorage';
import { deleteItemOnList } from '@functions/deleteItemOnList';

interface PlayersContext {
  players: Player[];
  getPlayers: (id: string) => void;
  addPlayer: (newPlayer: Player) => Promise<void>;
  deletePlayer: (player: Player) => Promise<void>;
  isLoading: boolean;
}

const PlayersContext = createContext<PlayersContext>({
  players: [],
  getPlayers: async () => {},
  addPlayer: async () => {},
  deletePlayer: async () => {},
  isLoading: false,
});

export const PlayersProvider = ({ children }: { children: React.ReactNode }) => {
  const [all, setAll] = useState<Player[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPlayers = useCallback(async (id: string) => {
    setIsLoading(true);

    const data: Player[] = await getStorage(KEY_PLAYERS);

    const filteredGroup = data.filter((item) => item.groupId === id);

    setPlayers(filteredGroup);

    setAll(data);

    setIsLoading(false);
  }, []);

  const addPlayer = async (newPlayer: Player) => {
    if (newPlayer.name) {
      const newArray: Player[] = [...all, newPlayer];

      await createStorage({ key: KEY_PLAYERS, value: newArray });

      await getPlayers(newPlayer.groupId);
    }
  };

  const deletePlayer = async (player: Player) => {
    const removedPlayerOnList: Player[] = deleteItemOnList({ id: player.id, list: all });

    await createStorage({ key: KEY_PLAYERS, value: removedPlayerOnList });

    await getPlayers(player.groupId);
  };

  return <PlayersContext.Provider value={{ players, getPlayers, addPlayer, deletePlayer, isLoading }}>{children}</PlayersContext.Provider>;
};

export const usePlayers = () => {
  return useContext(PlayersContext);
};
