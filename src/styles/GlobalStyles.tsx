import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   :root {
    --color-primary: #623CEA;
    --color-primary-50: #311E75;
    --color-secondary: #50CF9A;
    --color-secondary-50: #E5F8F0;
    --color-tertiary: #FF577F;
    --color-tertiary-50: #311E75;
    --color-quartiary: #506CCF;
    --color-quartiary-50: #E5F8F0;

    --color-gray-600: #0d0e0ff8;
    --color-gray-500: #0d0e0fed;
    --color-gray-400: #212529;
    --color-gray-300: #868E96;
    --color-gray-200: #E9ECEF;
    --color-gray-100: #F8F9FA;

    --color-linkedin: #0E76A8;
    --color-instagram: #CF50AC;
    --color-twitter: #000000;

    --Font-Primary: 'Inter', sans-serif;

    font-size: 60%;   
    
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%; 
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-gray-900);
    color: var(--color-gray-300);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;