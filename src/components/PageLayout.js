import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-areas: 'header header header' 'padLeft main padRight' 'footer footer footer';
  grid-template-columns: 0 minmax(200px, 979px) 0;
  grid-template-rows: auto 1fr auto;
  grid-column-gap: 10px;
  min-height: 100vh;

  @media only screen and (min-width: 980px) {
    grid-template-columns: minmax(0, 1fr) minmax(980px, 1185px) minmax(0, 1fr);
  }
`

export const LayoutArticles = styled.main`
  display: flex;
  grid-area: main;
`

export const LayoutFooter = styled.div`
  grid-area: footer;
  display: flex;
  flex-direction: column;
`
