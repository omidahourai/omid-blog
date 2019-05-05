import { graphql } from 'gatsby'
import { compose, withProps } from 'recompose'
import { lowerFirst } from 'lodash'

export const queryArticleFields = graphql`
  fragment ArticleNextPrevFieldsFragment on ContentfulArticle {
    id
    title
    slug
    category {
      name
    }
    hero {
      id
      title
      description
      file {
        url
      }
    }
    publishedOn
    updatedOn
  }
`

export default compose(
  withProps(
    ({ data }) => ({
      prevArticle: {
        ...data.prevArticle,
        link: {
          alt: data.prevArticle.title,
          title: data.prevArticle.title,
          to: `/${lowerFirst(data.prevArticle.category.name)}/${
            data.prevArticle.slug
          }/`,
        },
      },
      nextArticle: {
        ...data.nextArticle,
        link: {
          alt: data.nextArticle.title,
          title: data.nextArticle.title,
          to: `/${lowerFirst(data.nextArticle.category.name)}/${
            data.nextArticle.slug
          }/`,
        },
      },
      thumbImageMeta: selectors.getArticleThumbImageMeta(data),
    }),
    process.env.DEBUG &&
      withProps(props => {
        console.log('{props} [containers/ArticleNextPrev]', props)
      })
  )
)
