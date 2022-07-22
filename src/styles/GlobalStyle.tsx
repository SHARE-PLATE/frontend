import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	${({ theme: { defaultFontSize } }) => css`
    html {
      font-size: ${defaultFontSize};
    }

    * {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }

    .App {
    }
  `}
`;

export default GlobalStyle;
