import theme from 'styled-theming'
import { css, createGlobalStyle } from 'styled-components'

const bodyStyles = theme('mode', {
  light: css`
  background-color: #FFF;
  `,
  dark: css`
    background-color: #333;
  `
})

export default createGlobalStyle`
  body { ${bodyStyles} }
`