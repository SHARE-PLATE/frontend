import { createGlobalStyle, css } from 'styled-components';
import '@assets/fonts/font.css';
import '@styles/animations.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const appHeightProperty = '--app-height';

export const setAppHeight = () => {
  const setHeight = () => {
    document.documentElement.style.setProperty(appHeightProperty, `${window.innerHeight}px`);
  };

  window.addEventListener('resize', setHeight);

  setHeight();
};

const GlobalStyle = createGlobalStyle`
	${({ theme: { defaultWidth, defaultFontSize, fonts, colors } }) => css`
    * {
      box-sizing: border-box;
      box-sizing: border-box;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    html {
      color: ${colors.black};
      font-size: ${defaultFontSize}px;
    }

    body {
      display: flex;
      justify-content: center;
      background-color: ${colors.grey1};
    }

    button {
      ${fonts.main}

      cursor: pointer;
      color: ${colors.black};
    }

    #portal-root,
    #root {
      ${fonts.main}

      button {
        cursor: pointer;
      }
    }
    input {
      font-family: 'Noto Sans KR';
    }

    .App {
      ${defaultWidth}
      ${fonts.medium}
      
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: var(${appHeightProperty});
    }
  `}
`;

export default GlobalStyle;
