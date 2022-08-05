import { createGlobalStyle, css } from 'styled-components';
import '@assets/fonts/font.css';
import '@styles/animations.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlobalStyle = createGlobalStyle`
	${({ theme: { defaultWidth, defaultFontSize, fonts, colors } }) => css`
    .App {
      ${defaultWidth};
      width: 100vw;
      height: 100vh;
    }

    * {
      ${fonts.main};
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent; // 모바일에서 터치 시 색상 변형 방지
    }

    html {
      font-size: ${defaultFontSize};
    }

    body {
      display: flex;
      justify-content: center;
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
