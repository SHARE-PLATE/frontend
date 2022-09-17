const defaultFontSize = '16px';

const defaultWidth = { 'max-width': '755px', 'min-width': '355px' };

const defaultHeaderHeight = 3.25; // rem

const defaultPadding = { padding: '0 1rem' };

const fonts = {
  main: {
    'font-family': 'Noto Sans KR',
    'letter-spacing': '-0.02rem',
    'font-weight': '500',
  },
  xSmallLight: {
    'font-size': '10px',
    'font-weight': '200',
  },
  xSmallRegular: {
    'font-size': '10px',
    'font-weight': '400',
  },
  xSmall: {
    'font-size': '10px',
  },
  xSmallBold: {
    'font-size': '10px',
    'font-weight': '600',
  },
  smallLight: {
    'font-size': '12px',
    'font-weight': '200',
  },
  smallRegular: {
    'font-size': '12px',
    'font-weight': '400',
  },
  small: {
    'font-size': '12px',
  },
  smallBold: {
    'font-size': '12px',
    'font-weight': '600',
  },
  mediumRegular: {
    'font-size': '14px',
    'font-weight': '400',
  },
  medium: {
    'font-size': '14px',
  },
  mediumBold: {
    'font-size': '14px',
    'font-weight': '700',
  },
  largeRegular: {
    'font-size': '16px',
    'font-weight': '400',
  },
  large: {
    'font-size': '16px',
  },
  largeBold: {
    'font-size': '16px',
    'font-weight': '700',
  },
  xLargeRegular: {
    'font-size': '18px',
    'font-weight': '400',
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
  white0: '#ffffff',
  white1: '#fafafa',
  white2: '#f9f9f9',
  grey1: '#efefef',
  grey2: '#d9d9d9',
  grey3: '#d9d9df',
  grey4: '#999999',
  grey5: '#666666',
  grey6: '#343434',
  grey7: '#a8a8a8',
  black: '#191919',
  orange0: '#ffd6c7',
  orange1: '#ff8e65',
  orange2: '#FF453A',
  orange3: '#ff453f',
  red0: '#FFEAE9',
  blue0: '#1980E8',
};

const theme = { defaultFontSize, defaultWidth, fonts, colors, defaultPadding, defaultHeaderHeight };

type ThemeType = typeof theme;
type FontsType = keyof typeof fonts;
type ColorsType = keyof typeof colors;

export type { ThemeType, ColorsType, FontsType };
export default theme;
