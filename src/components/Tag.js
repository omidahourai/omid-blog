import React from 'react'
import Helmet from 'react-helmet'
import ArticlePreviewList from 'containers/ArticlePreviewList'
import LayoutHeader from 'containers/LayoutHeader'
import SiteFooter from 'components/SiteFooter'
import { Grid } from 'components/PageLayout'
import { LayoutArticles } from 'components/PageLayout'
import { LayoutFooter } from 'components/PageLayout'

export default props => (
  <React.Fragment>
    <Helmet title={props.pageTitle} meta={props.pageMeta} />
    {!props.data ? (
      <div>{'No Data :('}</div>
    ) : (
      <Grid>
        <LayoutHeader />
        <LayoutArticles>
          <ArticlePreviewList articles={props.articles}/>
        </LayoutArticles>
        <LayoutFooter>
          <SiteFooter />
        </LayoutFooter>
      </Grid>
    )}
  </React.Fragment>
)