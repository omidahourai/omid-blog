import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { LayoutHome, ArticlePreviewList } from 'components'
import SideBar from 'containers/SideBar'

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
  !props.data ? (
      <div>{'No Data :('}</div>
  ) : (
    <LayoutHome {...props}>
      <Wrapper>
        <Helmet {...props.meta} />
        <div>
          <ArticlePreviewList
            articles={props.articles}
          />
        </div>
        <SidebarWrapper>
          <SideBar
            instagram={props.instagram}
            categories={props.categories}
            author={props.author}
          />
        </SidebarWrapper>
      </Wrapper>
    </LayoutHome>
  )
)