import ArticleAuthor from 'components/ArticleAuthor'
import { compose, withProps } from 'recompose'
import * as selectors from 'selectors'

export const query = graphql`
  fragment ArticleAuthorFragment on ContentfulAuthor {
    firstName
    lastName
  }
`

export default compose(
  withProps(({data}) => ({
    authorDescription: selectors.getAuthorDescription(data),
    authorName: selectors.getAuthorName(data),
    authorImageMeta: selectors.getAuthorImageMeta(data),
  })),
  withProps(props => ({
    width: 110,
    height: 110,
    authorLink: {
      to: '#',
      title: `Articles by ${props.authorName}`,
      rel: 'author',
    }
  })),
)(ArticleAuthor)