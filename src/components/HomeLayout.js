import React from 'react'
import { LayoutHeader, InstagramBanner, SiteFooter } from 'components'
import styled from 'styled-components'
import 'react-tippy/dist/tippy.css'

// used as .site class in article and categoryTag layouts too
const Wrapper = styled.div`
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
const ContentWrapper = styled.div`
  grid-area: main;
`
const FooterWrapper = styled.div`
  grid-area: footer;
  display: flex;
  flex-direction: column;
`

const HomeLayout = props => (
  <Wrapper>
    <LayoutHeader />
    <ContentWrapper>{props.children}</ContentWrapper>
    <FooterWrapper>
      {props.instagram ? (
        <InstagramBanner feedData={props.instagram.data} />
      ) : (
        ''
      )}
      <SiteFooter />
    </FooterWrapper>
  </Wrapper>
)

export default HomeLayout
