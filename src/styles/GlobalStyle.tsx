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

    button {
      cursor: pointer;
    }

    #root {
      width: 100vw;
      height: 100vh;
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
  `}
`;

export default GlobalStyle;
