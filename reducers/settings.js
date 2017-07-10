// @flow
import { combineReducers } from 'redux';
import type { PlainAction } from 'types';

type Data = {
  wifiOnly: boolean,
};

type Ui = {};

export type State = {
  data: Data,
  ui: Ui,
}

const initialState: State = {
  data: {
    wifiOnly: false,
  },
  ui: {},
};

function data(state: Data = initialState.data, action: PlainAction = {}): Data {
  switch (action.type) {
    case 'FETCH_SETTINGS_SUCCESS': {
      return {
        ...action.payload,
      };
    }
    case 'CHANGE_WIFIONLY_SETTING': {
      return {
        ...state,
        wifiOnly: action.value,
      };
    }
    default:
      return state;
  }
}

function ui(state: Ui = initialState.ui, action: PlainAction = {}): Ui {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({ data, ui });
