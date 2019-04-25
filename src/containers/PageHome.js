import PageHome from 'components/PageHome'
import { compose, withProps } from 'recompose'
import { graphql } from 'gatsby'
import 'styles/global.css'

export const query = graphql`
  query {
    contentfulAuthor(
      firstName: { eq: "Omid" }
      lastName: { eq: "Ahourai" }
    ) {
      firstName
      lastName
      shortTitle
      photo {
        file {
          photoUrl: url
        }
      }
      altPhoto {
        file {
          photoUrl: url
        }
      }
      shortDescription
      description {
        text: description
      }
      facebookHandle
      twitterHandle
      instagramHandle
      linkedinHandle
      emailAddress
    }
    allContentfulCategory {
      ...SideBarFragment
    }
    allContentfulArticle (
      sort: { order: DESC, fields: [publishedOn] }
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          id
          title
          summary {
            childMarkdownRemark {
              html
            }
            id
            summary
          }
          hero {
            id
            title
            description
            file {
              url
            }
          }
          category {
            name
          }
          content {
            id
            content
          }
          author {
            id
            firstName
            lastName
            description {
              description
            }
          }
          tags {
            name
          }
          slug
          publishedOn
          updatedOn
        }
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
        { property: 'og:title', content: `Omid Ahourai's Blog` },
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
    }
  })),
  withProps(props => ({
    instagram: props.pageContext.instagram ? props.pageContext.instagram.data : [],
  })),
  withProps(({data}) => ({
    author: {...data.contentfulAuthor, fullName: `${data.contentfulAuthor.firstName} ${data.contentfulAuthor.lastName}`},
    articles: data.allContentfulArticle.edges.map(({node}) => node),
    categories: data.allContentfulCategory.edges.filter(({node}) => !!node.article).map(({node}) => node)
  })),
)(PageHome)