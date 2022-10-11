import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap');
    margin: 0;
    padding: 0;
    background: #4B0E8D;
    font-family: 'Montserrat', sans-serif; 
  }
`;

export default GlobalStyle;
