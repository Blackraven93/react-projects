import React, { useState } from 'react';
import Router from "./Router"
import { ResetStyle } from "./ResetStyle";
import { createGlobalStyle } from "styled-components"
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";


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

  const [isDark, setIsDark] = useState(false)
  const toggleDark = () => setIsDark(current => !current)

  return (
    <>
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <ResetStyle />
      <GlobalStyle />
      <Router isDark={isDark} toggleDark={toggleDark} />
      <ReactQueryDevtools initialIsOpen={true} />
    </ThemeProvider>
    </>
  )
}

export default App;
