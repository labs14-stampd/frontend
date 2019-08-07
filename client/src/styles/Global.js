import { css } from 'styled-components';

const Global = css`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'Poppins', 'Work Sans', sans-serif;
    line-height: 1.8;
  }
  h1 {
    font-size: 3.8rem;
  }
  h2 {
    font-size: 2.4rem;
  }
  p {
    font-size: 1.8rem;
    font-family: 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
    font-size: 1.8rem;
    font-family: 'Roboto', sans-serif;
  }
  input,
  textarea,
  button {
    -webkit-appearance: none;
    font-family: 'Roboto', sans-serif;
  }
label {
    font-size: 1.8rem;

    font-family: 'Poppins', 'Work Sans', sans-serif;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

export default Global;