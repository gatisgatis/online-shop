import { SettingsActions, Settings, CHANGE_SHOW_ADS, CHANGE_THEME, CHANGE_TIMEZONE } from './types';

const defaultSettings: Settings = {
  theme: 'light',
  timeZone: 2,
  showAds: true,
};

export const settingsReducer = (state = defaultSettings, action: SettingsActions) => {
  switch (action.type) {
    case CHANGE_THEME: {
      const newState = { ...state };
      // @ts-ignore
      newState.theme = action.payload.theme;
      return newState;
    }
    case CHANGE_TIMEZONE: {
      const newState = { ...state };
      // @ts-ignore
      newState.timeZone = action.payload.timeZone;
      return newState;
    }
    case CHANGE_SHOW_ADS: {
      const newState = { ...state };
      // @ts-ignore
      newState.showAds = !newState.showAds;
      return newState;
    }
    default:
      return state;
  }
};
