import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    background-color: #30d5c8;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    color: black;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  a {
    text-decoration: none;
     color: inherit;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  h1, h2, h3 {
    font-family: Pacifico;
    margin: 0;
    padding: 0;
  }
  p{
    margin: 0;
    padding: 0;
  }
  button{
     cursor: pointer;
  }
  input, button{
    font-family: inherit;
  }
  @media (max-width: 600px) {
    .header-block{
      padding: 20px 20px;
    }
   .header-container{
     flex-direction: column;
   }
   .logo{
     display: none;
   }
    .name{
      font-size: 35px;
      line-height: 50px;
    }
    .rools-block{
      margin-top: 30px;
      padding: 20px; 
    }
    .text{
      font-size: 18px;
      line-height: 25px;
      text-align: center;
    }
    .person{
      margin: 0 auto 30px auto;
    }
    .text-person{
      margin-top: 10px;
    }
    .shops-block{
      padding: 20px 50px;
      flex-direction: column;
    }
    .list{
      margin-bottom: 30px;
    }
  }
`;