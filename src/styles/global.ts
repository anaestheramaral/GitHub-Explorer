import { createGlobalStyle } from 'styled-components';
import gitHubBackground from '../assets/Github.svg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    }

  body{
    background: #F2F2FA url(${gitHubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, button{
    font: 16px Roboto, sans-serif;
  }

  #root{
    max-width: 48vw;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button{
    cursor: pointer;
  }
`;
