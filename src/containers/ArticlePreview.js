import ArticlePreview from 'components/ArticlePreview'
import { compose, withProps } from 'recompose'
import { graphql } from 'gatsby'
import { lowerFirst } from 'lodash'
import * as selectors from 'selectors'

export const query = graphql`
  fragment ArticlePreviewFragment on ContentfulArticle {
    id
    title
    slug
    publishedOn
    updatedOn
    tags {
      name
    }
    category {
      name
    }
    author {
      firstName
      lastName
    }
    summary {
      childMarkdownRemark {
        html
      }
    }
    hero {
      title
      description
      file {
        url
      }
    }
  }
`

export default compose(
  withProps(({ data }) => ({
    articleThumbnail: selectors.getArticleHeroImageMeta(data),
    articleUrl: selectors.getArticleUrl(data),
    summaryHtml: selectors.getArticleSummaryHtml(data),
  })),
  withProps(props => console.log('{props} [containers/ArticlePreview]', props))
)(ArticlePreview)
