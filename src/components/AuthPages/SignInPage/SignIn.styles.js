import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'DM Sans', sans-serif;
 
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'DM Sans', sans-serif;
    
  }
  section {
    position: relative;
  }
  p:last-child {
    margin-bottom: 0;
  }
  .reusecore__button {
    font-weight: 500;
  }
  
  .container {
    @media only screen and (max-width: 624px) {
    width: 100%;
    }
    @media only screen and (max-width: 624px) {
      padding-left: 20px;
      padding-right: 20px;
    }
    @media only screen and (width: 320px) {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
`;

export const AppWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  // FIXME: Remove me when the I'm fully responsive😆

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1 0 auto;
  width: 100%;
`;

export default GlobalStyle;
