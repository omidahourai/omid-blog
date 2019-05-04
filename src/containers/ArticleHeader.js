import { lowerFirst } from 'lodash'
import { compose, withProps } from 'recompose'
import { graphql } from 'gatsby'
import ArticleHeader from 'components/ArticleHeader'
import * as selectors from 'selectors'

export const query = graphql`
  fragment ArticleHeaderFragment on ContentfulArticle {
    title
    slug
    publishedOn
    category { name }
    author { firstName lastName }
  }
`

export default compose(
  withProps(props => ({
    instagram: props.pageContext.instagram ? props.pageContext.instagram.data : [], 
    categoryUrl: selectors.getCategoryUrl(props.data),
    categoryName: selectors.getCategoryName(props.data),
    publishDate: selectors.getArticlePublishDate(props.data),
    authorUrl: selectors.getAuthorUrl(props.data),
    authorName: selectors.getAuthorName(props.data),
  })),
  process.env.DEBUG && withProps(props => {console.log('{props} [containers/Article]',props)}),
)(Article)