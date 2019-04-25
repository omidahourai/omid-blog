import ArticlePreview from 'components/ArticlePreview'
import { compose, withProps } from 'recompose'

export default compose(
  withProps(() => ({
    dim: 1000,
  })),
  withProps(props => ({
    width: props.dim,
    height: props.dim,
    dim2x: props.dim * 2,
  })),
  withProps(props => ({
    heroImageMeta: {
      width: props.width,
      height: props.height,
      alt: props.heroImgTitle,
      title: props.title,
      src: `${props.heroImgUrl}?w=${props.dim}&h=${props.dim}&q=70`,
      srcSet: `${props.heroImgUrl}?w=${props.dim2x}&h=${props.dim2x}&q=70 2x`,
    }
  }))
)(ArticlePreview)