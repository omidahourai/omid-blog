import React from 'react'
import theme from 'styles/theme'
import { ThemeProvider } from 'styled-components'

export default props => (
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
)