// @value primary: #00A9FF;
// :global {
//   @import '//fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i';
// }

// @value primaryHighlight: #46A9EE;
// @value fontSerif: 'Playfair Display', serif;
// @value fontSansSerif: 'Open Sans', sans-serif;

export const theme = {
  color: {
    primary: '#00A9FF',
    primaryHighlight: '#46A9EE',
    // secondary: '#53C1DE',
    // white: "#FFF",
    // black: "#222",
    // border: "rgba(0,0,0,0.1)",
    // base: "rgba(0,0,0,0.4)",
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
}

export default theme
