type deleteItemOnListProps<T> = {
  id: string | number;
  list: T[];
};

export const deleteItemOnList = <T extends { id: string | number }>({ id, list }: deleteItemOnListProps<T>): T[] => {
  const deletedItem = list.filter((item) => item.id !== id);

  return deletedItem;
};
