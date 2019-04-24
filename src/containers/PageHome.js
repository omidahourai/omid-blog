import { graphql } from 'gatsby'
import { PageHome } from 'components'
import { compose, withProps } from 'recompose'

export const pageQuery = graphql`
  {
    author: contentfulAuthor(
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
    categories: allContentfulCategory {
      edges {
        node {
          ...SideBarCategoriesFragment
        }
      }
    }
    articles: allContentfulArticle(
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
    instagram: props.pageContext.instagram && props.pageContext.instagram.data,
  }),
  withProps(({data}) => ({
    author: {...data.author, fullName: `${data.author.firstName} ${data.author.lastName}`},
    articles: data.articles.edges.map(({node}) => node),
    categories: data.categories.edges.map(
      data.categories.edges.filter(({node}) => node.article),
      ({node}) => ({...node, count: node.article.length})
    ),
  })),
  // withHandlers({
  // }),
)(PageHome)