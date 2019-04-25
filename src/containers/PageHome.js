import PageHome from 'components/PageHome'
import { compose, withProps } from 'recompose'

export default compose(
  withProps(props => ({
    instagram: props.pageContext.instagram ? props.pageContext.instagram.data : [],
  })),
  withProps(({data}) => ({
    author: {...data.contentfulAuthor, fullName: `${data.contentfulAuthor.firstName} ${data.contentfulAuthor.lastName}`},
    articles: data.allContentfulArticle.edges.map(({node}) => node),
    categories: data.allContentfulCategory.edges
      .filter(({node}) => node.article)
      .map(({node}) => ({...node, count: node.article.length})),
  })),
  // withHandlers({
  // }),
)(PageHome)