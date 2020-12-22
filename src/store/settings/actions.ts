import { CHANGE_SHOW_ADS, CHANGE_TIMEZONE, CHANGE_THEME, SettingsActions, Theme } from './types';

export const changeTimeZone = (timeZone: number): SettingsActions => {
  return {
    type: CHANGE_TIMEZONE,
    payload: {
      timeZone,
    },
  };
};

export const changeTheme = (theme: Theme): SettingsActions => {
  return {
    type: CHANGE_THEME,
    payload: {
      theme,
    },
  };
};

export const toggleShowAds = (): SettingsActions => {
  return {
    type: CHANGE_SHOW_ADS,
  };
};
