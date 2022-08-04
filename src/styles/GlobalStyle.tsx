import { createGlobalStyle, css } from 'styled-components';
import '@assets/fonts/font.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlobalStyle = createGlobalStyle`
	${({ theme: { defaultWidth, defaultFontSize, fonts, colors } }) => css`
    #root {
      ${defaultWidth};
      width: 100vw;
      height: 100vh;
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

    * {
      ${fonts.main};
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }

    button {
      cursor: pointer;
    }

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fadeout {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }

    @keyframes slideout {
      from {
        margin-right: -30%;
      }
      to {
        margin-right: 0;
      }
    }

    @keyframes slidein {
      from {
        margin-right: 0;
      }
      to {
        margin-right: -30%;
      }
    }
  `}
`;

export default GlobalStyle;
