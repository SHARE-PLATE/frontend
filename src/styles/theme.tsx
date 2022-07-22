const defaultFontSize = '16px';

const defaultWidth = {};

const fonts = {};

const colors = {};

const theme = { defaultFontSize, defaultWidth, fonts, colors };

type ThemeType = typeof theme;
type FontsType = keyof typeof fonts;
type ColorsType = keyof typeof colors;

export type { ThemeType, ColorsType, FontsType };
export default theme;
