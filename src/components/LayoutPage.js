import React from 'react'
import theme from 'styles/theme'
import styled from 'styled-components'
import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'
import { compose, withState, withHandlers, lifecycle } from 'recompose'

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


export const Page = compose(
  withState('mode', 'setMode', 'light'),
  lifecycle({
    componentDidMount() {
      let mode = window.localStorage.getItem('mode')
      if (!mode) {
        mode = 'light'
        window.localStorage.setItem('mode', mode)
      }
      this.props.setMode(mode)
    }
  }),
  withHandlers({
    toggleMode: props => e => {
      const mode = (props.mode === 'light') ? 'dark' : 'light'
      localStorage.setItem('mode', mode)
      props.setMode(mode)
    }
  }),
)(props => (
  <ThemeProvider theme={{
    mode: props.mode,
    toggleMode: props.toggleMode,
    ...theme
  }}>
    <React.Fragment>
      <GlobalStyles />
      {props.children}
    </React.Fragment>
  </ThemeProvider>
))

export const PageGrid = props => (
  <Page>
    <Grid>
      {props.children}
    </Grid>
  </Page>
)