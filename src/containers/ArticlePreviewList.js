import ArticlePreviewList from 'components/ArticlePreviewList'
import { compose, withProps } from 'recompose'
import { graphql } from 'gatsby'
// export const query = graphql`
//   fragment ArticlePreviewListFragment on ContentfulArticle {
//     articles: article {
//       ...SocialLinksFragment
//       ...ArticlePreviewFragment
//       ...ArticlePreviewHeaderFragment
//     }
//   }
// `

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
  fragment ArticlePreviewListFragment on Query {
    articles: allContentfulArticle (
      sort: { order: DESC, fields: [publishedOn] }
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          id
          ...SocialLinksFragment
          ...ArticlePreviewFragment
          ...ArticlePreviewHeaderFragment
        }
      }
    }
  }
`
export default compose(
  withProps(({data}) => ({
    articles: data.articles.edges.map(({node}) => node),
  })),
  withProps(props => console.log('{props} [containers/ArticlePreviewList]',props)),
)(ArticlePreviewList)