import { MMKV } from 'react-native-mmkv';

const REDUX_STORAGE = new MMKV();

const mmkvStorage = {
  setItem: (key: string, value: string) => {
    REDUX_STORAGE.set(key, value); // luôn string
    return Promise.resolve(true);
  },
  getItem: (key: string) => {
    const value = REDUX_STORAGE.getString(key);
    return Promise.resolve(value ?? null);
  },
  removeItem: (key: string) => {
    REDUX_STORAGE.delete(key);
    return Promise.resolve();
  },
  clearAll: () => {
    REDUX_STORAGE.clearAll();
    return Promise.resolve();
  },
};

export default mmkvStorage;