import React from 'react'
import Helmet from 'react-helmet'
import LayoutHeader from 'containers/LayoutHeader'
import SiteFooter from 'components/SiteFooter'
import ArticlePreviewList from 'containers/ArticlePreviewList'
import { Grid } from 'components/PageLayout'
import { LayoutArticles } from 'components/PageLayout'
import { LayoutFooter } from 'components/PageLayout'

export default props => (
  !props.data ? (
    <div>{'No Data :('}</div>
  ) : (
    <Grid>
      <Helmet {...props.meta} />
      <LayoutHeader />
      <LayoutArticles>
        <ArticlePreviewList articles={props.articles} />
      </LayoutArticles>
      <LayoutFooter>
        <SiteFooter />
      </LayoutFooter>
    </Grid>
  )
)