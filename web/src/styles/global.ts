import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap');

  :root {
    --primary: #4206D1;
    --secondary: #161616;
    --tertiary: #04C497;
    --white: #fff;
    --gray: #8794BA;
    --light-gray: #F8F9FF;
    --dark-gray: #242B32;
  }

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Spartan', 'Work Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: var(--light-gray);
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }
`;
