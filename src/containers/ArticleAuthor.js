import { compose, withProps } from 'recompose'
import ArticleAuthor from 'components/ArticleAuthor'

const parseAvatarImageMeta = ({
  width, height, width2x, height2x, author,
}) => ({
  width,
  height,
  alt: author.fullName,
  src: `${author.photo.file.url}?w=${width}&h=${height}&q=70`,
  srcSet: `${author.photo.file.url}?w=${width2x}&h=${height2x}&q=70 2x`,
})

export default compose(
  withProps({dim: 110}),
  withProps(({dim}) => ({
    width2x: dim * 2,
    height2x: dim * 2,
    width: dim,
    height: dim,
  })),
  withProps(props => ({
    avatarImageMeta: parseAvatarImageMeta(props),
    authorLink: {
      to: '#',
      title: `Articles by ${props.author.fullName}`,
      rel: 'author',
    }
  })),
)(ArticleAuthor)