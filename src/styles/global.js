import Theme from 'styled-theming'
import { theme } from './theme'
import { css, createGlobalStyle } from 'styled-components'

const bodyStyles = Theme('mode', {
  light: css`
    background-color: #FFF;
  `,
  dark: css`
    background-color: #333;
  `
})

const crossFade = css`
  transition: background 1s;
`

export default createGlobalStyle`
  body {
    ${bodyStyles}
    ${crossFade}
  }
  p, span, h1, h2, h3, h4, h5, h6 {
    ${theme.text}
    ${crossFade}
  }
  a {
    ${theme.link}
    ${crossFade}
  }
`