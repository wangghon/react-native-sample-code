
import storage from 'services/storageService';
import {
  getUserSettingsKey,
} from 'config/StorageKeys';
import defaultSettings from 'config/settings';

export const loadUserInfoFromStorage = async (userId) => {
  const [
    settings,
  ] = await Promise.all([
    storage.get(getUserSettingsKey(userId)),
  ]);

  const userSettings = settings || defaultSettings.user;
  store.dispatch({ type: 'FETCH_SETTINGS_SUCCESS', payload: userSettings });
};
