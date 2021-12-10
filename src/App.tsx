import React from 'react';
import Router from "./Router"
import { ResetStyle } from "./ResetStyle";
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bgColor};
    color:${props => props.theme.textColor};
    line-height: 1.2;
  }

  a {
    color:inherit;
  }
`


function App() {
  return (
    <>
      <ResetStyle/>
      <GlobalStyle/>
      <Router/>
    </>
  )
}

export default App;
