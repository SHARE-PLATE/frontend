import { createGlobalStyle, css } from 'styled-components';
import '@assets/fonts/font.css';
import '@styles/animations.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlobalStyle = createGlobalStyle`
	${({ theme: { defaultWidth, defaultFontSize, fonts, colors } }) => css`
    * {
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
    }

    button {
      cursor: pointer;
    }

    .App {
      ${defaultWidth};
      width: 100vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    #portal-root,
    #root {
      ${fonts.main};
    }
  `}
`;

export default GlobalStyle;
