import ArticlePreview from 'components/ArticlePreview'
import { compose, withProps } from 'recompose'

export const query = graphql`
  fragment ArticlePreviewFragment on ContentfulArticle {
    id
    title
    slug
    publishedOn
    updatedOn
    tags { name }
    category { name }
    author { firstName lastName }
    summary { childMarkdownRemark { html } }
    hero { title description file { url } }
  }
`

export default compose(
  withProps(() => ({
    dim: 1000,
  })),
  withProps(props => ({
    width: props.dim,
    height: props.dim,
    dim2x: props.dim * 2,
    heroImgUrl: `http:${props.hero.file.url}?w=1000&h=1000`,
  })),
  withProps(props => ({
    heroImageMeta: {
      width: props.width,
      height: props.height,
      alt: props.hero.title,
      title: props.title,
      src: `${props.heroImgUrl}?w=${props.dim}&h=${props.dim}&q=70`,
      srcSet: `${props.heroImgUrl}?w=${props.dim2x}&h=${props.dim2x}&q=70 2x`,
    }
  })),
  withProps(props => ({
    author: props.author || {
      firstName: 'AUTHOR',
      lastName: 'NOT SET'
    },
  })),
  withProps(props => ({
    articleUrl: `/article/${props.id}/`,
    // authorUrl: `/author/${(props.author.firstName + props.author.lastName).toLowerCase()}`,
    // categoryUrl: `/${lowerFirst(props.category.name)}/`,
    // authorName: `${props.author.firstName} ${props.author.lastName}`,
    summaryHtml: props.summary.childMarkdownRemark.html || 'SUMMARY NOT SET',
  })),
  withProps(props => console.log('{props} [containers/ArticlePreview]',props)),
)(ArticlePreview)