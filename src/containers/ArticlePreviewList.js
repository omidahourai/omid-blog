import ArticlePreviewList from 'components/ArticlePreviewList'
import { compose, withProps } from 'recompose'
import { graphql } from 'gatsby'
import * as selectors from 'selectors'

export const queryCategoryArticle = graphql`
  fragment CategoryArticlePreviewListFragment on ContentfulCategory {
    articles: article {
      id
      ...SocialLinksFragment
      ...ArticlePreviewFragment
      ...ArticlePreviewHeaderFragment
    }
  }
`
export const queryTagArticle = graphql`
  fragment TagArticlePreviewListFragment on ContentfulTag {
    articles: article {
      id
      ...SocialLinksFragment
      ...ArticlePreviewFragment
      ...ArticlePreviewHeaderFragment
    }
  }
`

export const queryArticleConnection = graphql`
  fragment ArticlePreviewListFragment on ContentfulArticleConnection {
    edges {
      node {
        id
        ...SocialLinksFragment
        ...ArticlePreviewFragment
        ...ArticlePreviewHeaderFragment
      }
    }
  }
`
export default compose(
  process.env.DEBUG && withProps(props => console.log('{props} [containers/ArticlePreviewList]', props)),
  withProps(({ data }) => ({
    articles: data.articles
      ? selectors.getCompletedArticles(data)
      : selectors.getCategoryArticles(data),
  })),
  process.env.DEBUG && withProps(props => console.log('{props} [containers/ArticlePreviewList]', props))
)(ArticlePreviewList)
