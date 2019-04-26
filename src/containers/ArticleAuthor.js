import ArticleAuthor from 'components/ArticleAuthor'
import { compose, withProps } from 'recompose'

export default compose(
  withProps({dim: 110}),
  withProps(({dim}) => ({
    width2x: dim * 2,
    height2x: dim * 2,
    width: dim,
    height: dim,
  })),
  withProps(props => ({
    avatarImageMeta: {
      width: props.width,
      height: props.height,
      alt: props.author.fullName,
      src: `${props.author.photo.file.url}?w=${props.width}&h=${props.height}&q=70`,
      srcSet: `${props.author.photo.file.url}?w=${props.width2x}&h=${props.height2x}&q=70 2x`,
    },
    authorLink: {
      to: '#',
      title: `Articles by ${props.author.fullName}`,
      rel: 'author',
    }
  })),
)(ArticleAuthor)