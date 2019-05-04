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
    heroImgUrl: selectors.getArticleHeroShare(props.data),
  })),
  withProps(props => ({
    heroImageMeta: {
      width: props.width,
      height: props.height,
      alt: props.hero.title,
      title: props.title,
      src: `${props.heroImgUrl}?w=${props.dim}&h=${props.dim}&q=70`,
      srcSet: `${props.heroImgUrl}?w=${props.dim2x}&h=${props.dim2x}&q=70 2x`,
    },
    articleUrl: selectors.getArticleUrl(props.data),
    summaryHtml: selectors.getArticleSummaryHtml(props.data),
  })),
  withProps(props => console.log('{props} [containers/ArticlePreview]',props)),
)(ArticlePreview)