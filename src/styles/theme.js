import { css } from 'styled-components'
import Theme from 'styled-theming'

const colors = {
  primary: '#00A9FF',
  primaryHighlight: '#46A9EE',
  alert: '#FF4258',
  success: 'mediumseagreen',
  info: '#4C98E6',
  link: '#41bbe1',
}

export const theme = {
  // color: Theme('mode', {
  //   light: {
  //     primary: '#00A9FF',
  //     primaryHighlight: '#46A9EE',
  //     alert: '#FF4258',
  //     success: 'mediumseagreen',
  //     info: '#4C98E6',
  //     link: '#41bbe1',
  //   }
  // }),
  color: {
    primary: '#00A9FF',
    primaryHighlight: '#46A9EE',
    alert: '#FF4258',
    success: 'mediumseagreen',
    info: '#4C98E6',
    link: '#41bbe1',
  },
  icon: {
    color: 'gray',
    size: '15px',
  },
  font: {
    serif: `
      'Playfair Display',
      serif
    `,
    sansSerif: `
      'Open Sans',
      sans-serif
    `,
    base: '13px',
    small: '11px',
    xsmall: '9px',
    large: '20px',
    xlarge: '30px',
    xxlarge: '50px',
  },
  headings: {
    family: 'Helvetica Neue',
  },
  gutter: '2em',
  transition: '300ms ease-in-out',
  text: Theme('mode', {
    light: '#333',
    dark: '#E3E3E3',
  }),
  link: Theme('mode', {
    light: `
      text-decoration: none;
      color: #00A9FF;
      &:hover { color: #46A9EE; }
      `,
    dark: `
      text-decoration: none;
      color: #00A9FF;
      &:hover { color: #46A9EE; }
    `,
  }),
}

export default theme
