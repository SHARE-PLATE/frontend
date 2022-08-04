const defaultFontSize = '16px';

const defaultWidth = { 'max-width': '750px', 'min-width': '300px' };

const fonts = {
  main: {
    'font-family': 'Noto Sans KR',
  },
  small: {
    'font-size': '12px',
  },
  medium: {
    'font-size': '14px',
  },
  mediumBold: {
    'font-size': '14px',
    'font-weight': '700',
  },
  large: {
    'font-size': '16px',
  },
  xLarge: {
    'font-size': '18px',
  },
  xLargeBold: {
    'font-size': '18px',
    'font-weight': '700',
  },
};

const colors = {
  white1: '#ffffff',
  white2: '#f9f9f9',
  grey1: '#efefef',
  grey2: '#d9d9d9',
  grey3: '#d9d9df',
  grey4: '#999999',
  grey5: '#666666',
  grey6: '#343434',
  black: '#191919',
  orange1: '#ff8e65',
  orange2: '#ff5c21',
};

const theme = { defaultFontSize, defaultWidth, fonts, colors };

type ThemeType = typeof theme;
type FontsType = keyof typeof fonts;
type ColorsType = keyof typeof colors;

export type { ThemeType, ColorsType, FontsType };
export default theme;
