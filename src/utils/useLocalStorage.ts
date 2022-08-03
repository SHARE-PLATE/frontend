export const SEARCH_RECENT_KEY = 'searchRecent';

export const getLocalStorageInfo = (key: string) => {
  const data = window.localStorage.getItem(key);
  const info = data && JSON.parse(data);
  return info;
};

export const setLocalStorageInfo = ({ key, info }: { key: string; info: any }) => {
  window.localStorage.setItem(key, JSON.stringify(info));
};
