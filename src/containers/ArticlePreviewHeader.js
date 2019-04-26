import moment from 'moment'
import ArticlePreviewHeader from 'components/ArticlePreviewHeader'
import { compose, withProps } from 'recompose'
import { graphql } from 'gatsby'
import { lowerFirst } from 'lodash'

export const query = graphql`
  fragment ArticlePreviewHeaderFragment on ContentfulArticle {
    title
    publishedOn
    category { name }
    author { firstName lastName }
  }
`

export default compose(
  withProps(props => ({
    authorUrl: '#',
    articleUrl: props.articleUrl,
    authorName: `${props.author.firstName} ${props.author.lastName}`,
    authorUrl: `/author/${(props.author.firstName + props.author.lastName).toLowerCase()}`,
    categoryUrl: `/${lowerFirst(props.category.name)}/`,
    categoryName: props.category.name,
    publishDate: moment(props.publishedOn).format('MMMM D, YYYY'),
  })),
  process.env.DEBUG && withProps(props => console.log('{props} [containers/ArticlePreviewHeader]',props)),
)(ArticlePreviewHeader)