export const replaceItemAtIndex = <T>(
  arr: Array<T>,
  index: number,
  newValue: T
): Array<T> => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

export const removeItemAtIndex = <T>(
  arr: Array<T>,
  index: number
): Array<T> => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

type Id = {
  id: number;
};

export const replaceItemById = <T extends Id>(arr: Array<T>, newValue: T) => {
  const index = arr.findIndex((item) => item.id === newValue.id);
  return replaceItemAtIndex(arr, index, newValue);
};

export const removeItemById = <T extends Id>(arr: Array<T>, id: number) => {
  const index = arr.findIndex((item) => item.id === id);
  return removeItemAtIndex(arr, index);
};
