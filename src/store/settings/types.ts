export const CHANGE_THEME = 'CHANGE_THEME';
export const CHANGE_TIMEZONE = 'CHANGE_TIMEZONE';
export const CHANGE_SHOW_ADS = 'CHANGE_SHOW_ADS';


export interface Settings {
  theme: Theme;
  timeZone: number;
  showAds: boolean;
}

export type Theme = 'dark' | 'light';

interface ChangeThemeAction {
  type: typeof CHANGE_THEME;
  payload: {
    theme: Theme;
  };
}

interface ChangeTimezoneAction {
  type: typeof CHANGE_TIMEZONE;
  payload: {
    timeZone: number;
  };
}

interface ChangeShowAdsType {
  type: typeof CHANGE_SHOW_ADS;
}

export type SettingsActions = ChangeThemeAction | ChangeTimezoneAction | ChangeShowAdsType;
