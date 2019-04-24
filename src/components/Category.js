import React from 'react'
import Helmet from 'react-helmet'
import { ArticlePreviewList, LayoutHeader, SiteFooter } from 'components'
import { Wrapper, LayoutArticles, LayoutFooter } from './tag'

export default props => (
  !props.data ? (
    <div>{'No Data :('}</div>
  ) : (
    <Wrapper>
      <Helmet {...props.meta} />
      <LayoutHeader />
      <LayoutArticles>
        <ArticlePreviewList articles={props.articles} />
      </LayoutArticles>
      <LayoutFooter>
        <SiteFooter />
      </LayoutFooter>
    </Wrapper>
  )
)