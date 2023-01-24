export const setLocalStorage = (key: string, item: any) => {
  const convertedItem = JSON.stringify(item);
  localStorage.setItem(key, convertedItem);
};

export const getLocalStorage = (key: string) => JSON.parse(localStorage.getItem(key));
