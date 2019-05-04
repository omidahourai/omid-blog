import ArticleFooter from 'components/ArticleFooter'
import { compose, withProps } from 'recompose'

export const query = graphql`
  fragment ArticleFooterFragment on ContentfulArticle {
    id
    tags { name }
  }
`

export default compose(
  withProps(props => ({
    articleId: props.article.id,
    tags: props.article.tags.map(({name}) => name),
  })),
)(ArticleFooter)