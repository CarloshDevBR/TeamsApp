type verifyAlreadyExistsItemOnListProps<T> = {
  list: T[];
  callBack: (item: T) => void;
};

export const verifyAlreadyExistsItemOnList = <T extends { id: string | number }>({
  list,
  callBack,
}: verifyAlreadyExistsItemOnListProps<T>): boolean => {
  const group = list.find(callBack);

  return Boolean(group);
};
