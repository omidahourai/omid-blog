import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import ArticlePreviewList from 'containers/ArticlePreviewList'
import SideBar from 'containers/SideBar'
import LayoutHome from 'components/LayoutHome'
import Page from 'components/Page'

const Wrapper = styled.div`
  display: flex;
`
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
export default props => (
  <Page>
    {!props.data ? (
        <div>{'No Data :('}</div>
    ) : (
      <LayoutHome {...props}>
        <Wrapper>
          <Helmet meta={props.pageMeta} title={props.pageTitle} />
          <div>
            <ArticlePreviewList data={props.data}/>
          </div>
          <SidebarWrapper>
            <SideBar {...props}/>
          </SidebarWrapper>
        </Wrapper>
      </LayoutHome>
    )}
  </Page>
)