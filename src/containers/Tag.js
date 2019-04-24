import { graphql } from 'gatsby'
import { compose, withProps } from 'recompose'
import Tag from 'components/Tag'

export const pageQuery = graphql`
  query($tagName: String!) {
    tag: contentfulTag(name: { eq: $tagName }) {
      name
      articles: article {
        id
        title
        tags {
          name
        }
        summary {
          childMarkdownRemark {
            html
          }
        }
        hero {
          title
          description
          file {
            url
          }
        }
        category {
          name
        }
        author {
          firstName
          lastName
        }
        slug
        publishedOn
        updatedOn
      }
    }
  }
`

export default compose(
  withProps(props => ({
    meta: {
      title: `Omid Ahourai's Blog`,
      meta: [
        {
          name: 'description',
          content:
            'Read about my life! Omid Ahourai is an Entrepreneur, Web and Mobile Apps and Games Developer, and Digital Nomad.',
        },
        {
          name: 'keywords',
          content:
            'omid ahourai, omid, ahourai, digital nomad, ardentkid, storyfork',
        },
        { property: 'og:site_name', content: `Blog - Omid Ahourai` },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: `Omid Ahourai Blog - ${props.tag.name}` },
        {
          property: 'og:description',
          content:
            'Read about my life! Omid Ahourai is an Entrepreneur, Web and Mobile Apps and Games Developer, and Digital Nomad.',
        },
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
    },
    articles: props.tag.articles,
  })),
)(Tag)