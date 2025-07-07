import { createGlobalStyle } from "styled-components";

interface GlobalStyledProps {
  backgroundImage: string | null;
}

export const $GlobalStyled = createGlobalStyle<GlobalStyledProps>`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
     body {
      min-height: 100vh;
      background-color: #ADD8E6;
      ${({ backgroundImage }) =>
      backgroundImage &&
      `
      background-image: url(${backgroundImage});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transition: background-image 0.5s ease-in-out;
    `}
  }

`;
