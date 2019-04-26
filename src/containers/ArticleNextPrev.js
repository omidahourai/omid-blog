import { graphql } from 'gatsby'
import { compose, withProps } from 'recompose'
import { lowerFirst } from 'lodash'

export const queryArticleFields = graphql`
  fragment ArticleNextPrevFieldsFragment on ContentfulArticle {
    id
    title
    slug
    category { name }
    hero { id title description file { url } }
    publishedOn
    updatedOn
  }
`

export const queryArticlePrev = graphql`
  fragment ArticlePrevFragment on Query {
    prevArticle: contentfulArticle(id: { eq: $prevId }) {
      ...ArticleNextPrevFieldsFragment
    }
  }
`

export const queryArticleNext = graphql`
  fragment ArticleNextFragment on Query {
    nextArticle: contentfulArticle(id: { eq: $nextId }) {
      ...ArticleNextPrevFieldsFragment
    }
  }
`

export default compose(
  withProps(({data}) => ({
    prevArticle: {
      ...data.prevArticle,
      link: {
        alt: data.prevArticle.title,
        title: data.prevArticle.title,
        to: `/${lowerFirst(data.prevArticle.category.name)}/${data.prevArticle.slug}/`,
      }
    },
    nextArticle: {
      ...data.nextArticle,
      link: {
        alt: data.nextArticle.title,
        title: data.nextArticle.title,
        to: `/${lowerFirst(data.nextArticle.category.name)}/${data.nextArticle.slug}/`,
      },
    },
  }),
  withProps(props => ({
    imgWidth: props.hero.width || 75,
    imgHeight: props.hero.height || 75,
  }),
  withProps(props => ({
    imgWidth2x: props.imgWidth * 2,
    imgHeight2x: props.imgHeight * 2,
  })),
  withProps(props => ({
    imageMeta: {
      title: props.title,
      alt: props.hero.title,
      src: `${props.hero.file.url}?w=${props.imgWidth}&h=${props.imgHeight}&q=70`,
      srcSet: `${props.hero.file.url}?w=${props.imgWidth2x}&h=${props.imgHeight2x}&q=70 2x`,
    },
  })),
)))