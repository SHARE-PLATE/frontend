const defaultFontSize = '16px';

const defaultWidth = {};

const fonts = {
  medium: {
    'font-size': '14px',
  },
  large: {
    'font-size': '16px',
  },
  xLargeBold: {
    'font-size': '18px',
    'font-weight': '700',
  },
};

const colors = {};

const theme = { defaultFontSize, defaultWidth, fonts, colors };

type ThemeType = typeof theme;
type FontsType = keyof typeof fonts;
type ColorsType = keyof typeof colors;

export type { ThemeType, ColorsType, FontsType };
export default theme;
