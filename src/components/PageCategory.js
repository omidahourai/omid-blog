import React from 'react'
import Helmet from 'react-helmet'
import LayoutHeader from 'containers/LayoutHeader'
import SiteFooter from 'components/SiteFooter'
import ArticlePreviewList from 'containers/ArticlePreviewList'
import { PageGrid } from 'components/PageLayout'
import { LayoutArticles } from 'components/PageLayout'
import { LayoutFooter } from 'components/PageLayout'

export default props =>
  !props.data ? (
    <div>{'No Data :('}</div>
  ) : (
    <PageGrid>
      <Helmet meta={props.pageMeta} title={props.pageTitle} />
      <LayoutHeader />
      <LayoutArticles>
        <ArticlePreviewList data={props.data} />
      </LayoutArticles>
      <LayoutFooter>
        <SiteFooter />
      </LayoutFooter>
    </PageGrid>
  )
