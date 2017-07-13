import _ from 'lodash';

import store from 'store';
import storage from 'services/storageService';
import { getUserSettingsKey } from 'config/StorageKeys';


const isLoggedIn = (profile) => !!_.get(profile, ['data', 'token']);
let settingsSubscriber;
let prevSettings = {};

const shouldStoreSettings = (state, prevSettings) => isLoggedIn(state.profile) && !_.isEqual(state.settings.data, prevSettings) && state.app.ui.userDataLoaded;
const subscribeSettingsEvent = () => {
  if (settingsSubscriber) {
    settingsSubscriber();
  }

  settingsSubscriber = store.subscribe(() => {
    const state = store.getState();
    if (shouldStoreSettings(state, prevSettings)) {
      const settings = state.settings.data;
      const userId = Api.session().userId();
      storage.set(getUserSettingsKey(userId), settings);
      prevSettings = settings;
    }
  });
};
