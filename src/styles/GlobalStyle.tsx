import { createGlobalStyle, css } from 'styled-components';
import '@assets/fonts/font.css';
import '@styles/animations.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlobalStyle = createGlobalStyle`
	${({ theme: { defaultWidth, defaultFontSize, fonts, colors } }) => css`
    #root {
      ${defaultWidth};
      width: 100vw;
      height: 100vh;
    }

    * {
      ${fonts.main};
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }

    html {
      font-size: ${defaultFontSize};
    }

    body {
      display: flex;
      justify-content: center;
      overflow: hidden;
      background-color: ${colors.grey1};

      > * {
        background-color: ${colors.white1};
      }
    }

    button {
      cursor: pointer;
    }
  `}
`;

export default GlobalStyle;
