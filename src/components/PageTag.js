import React from 'react'
import Helmet from 'react-helmet'
import ArticlePreviewList from 'containers/ArticlePreviewList'
import LayoutHeader from 'containers/LayoutHeader'
import SiteFooter from 'components/SiteFooter'
import { PageGrid } from 'components/LayoutPage'
import { LayoutArticles } from 'components/LayoutPage'
import { LayoutFooter } from 'components/LayoutPage'

export default props => (
  <React.Fragment>
    <Helmet title={props.pageTitle} meta={props.pageMeta} />
    <PageGrid>
      <LayoutHeader />
      <LayoutArticles>
        <ArticlePreviewList data={props.data} />
      </LayoutArticles>
      <LayoutFooter>
        <SiteFooter />
      </LayoutFooter>
    </PageGrid>
  </React.Fragment>
)
