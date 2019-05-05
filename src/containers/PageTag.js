import PageTag from 'components/PageTag'
import { graphql } from 'gatsby'
import { compose, withProps } from 'recompose'

export const query = graphql`
  query($tagName: String!) {
    tag: contentfulTag(name: { eq: $tagName }) {
      name
      ...TagArticlePreviewListFragment
    }
  }
`

export default compose(
  withProps(props => ({
    pageTitle: `Omid Ahourai's Blog`,
    pageMeta: [
      { name: 'description', content: 'Read about my life! Omid Ahourai is an Entrepreneur, Web and Mobile Apps and Games Developer, and Digital Nomad.' },
      { name: 'keywords', content: 'omid ahourai, omid, ahourai, digital nomad, ardentkid, storyfork' },
      { property: 'og:site_name', content: `Blog - Omid Ahourai` },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: `Omid Ahourai Blog - ${props.data.tag.name}` },
      { property: 'og:description', content: 'Read about my life! Omid Ahourai is an Entrepreneur, Web and Mobile Apps and Games Developer, and Digital Nomad.' },
      { property: 'og:url', content: `http://www.omid.com/` },
      // { property: 'og:image', content: `${hero.file.url}?w=1200&q=70` },
      // { name: 'twitter:card', content: 'summary_large_image' },
      // { name: 'twitter:title', content: title },
      // { name: 'twitter:description', content: summary },
      // { name: 'twitter:url', content: `http://omid.com/articles/${slug}` },
      // { name: 'twitter:image', content: `${hero.file.url}?w=1200&q=70` },
      // { name: 'twitter:label1', content: 'Written by' },
      // { name: 'twitter:data1', content: `${ author.firstName } ${ author.lastName }` },
      // { name: 'twitter:label2', content: 'Filed under' },
      // { name: 'twitter:data2', content: category },
    ],
  })),
  process.env.DEBUG && withProps(props => console.log('{props} [containers/PageTag]', props))
)(PageTag)
