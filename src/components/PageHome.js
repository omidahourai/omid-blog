import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import ArticlePreviewList from 'containers/ArticlePreviewList'
import SideBar from 'containers/SideBar'
import SiteFooter from 'components/SiteFooter'
import InstagramBanner from 'containers/InstagramBanner'
import LayoutHeader from 'containers/LayoutHeader'
import { PageGrid } from 'components/PageLayout'
import 'react-tippy/dist/tippy.css'

const SidebarWrapper = styled.div`
  position: static;
  width: 345px;
  height: 1239px;
  display: block;
  float: left;
  @media only screen and (max-width: 979px) {
    display: none;
  }
`
const ContentWrapper = styled.div`
  grid-area: main;
  display: flex;
`
const FooterWrapper = styled.div`
  grid-area: footer;
  display: flex;
  flex-direction: column;
`

export default props => (
  <Helmet meta={props.pageMeta} title={props.pageTitle} />
  <PageGrid>
    <LayoutHeader />
    <ContentWrapper>
      <div>
        <ArticlePreviewList data={props.data} />
      </div>
      <SidebarWrapper>
        <SideBar {...props} />
      </SidebarWrapper>
    </ContentWrapper>
    <FooterWrapper>
      <InstagramBanner/>
      <SiteFooter />
    </FooterWrapper>
  </PageGrid>
)
