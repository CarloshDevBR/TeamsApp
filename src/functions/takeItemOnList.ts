type takeItemOnListProps<T> = {
  id: string | number;
  list: T[];
};

export const takeItemOnList = <T extends { id: string | number }>({ id, list }: takeItemOnListProps<T>): T | undefined => {
  const item = list.find((item) => item.id === id);

  return item;
};
