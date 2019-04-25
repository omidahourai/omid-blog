import { lowerFirst } from 'lodash'
import { compose, withProps } from 'recompose'
import { graphql } from 'gatsby'
import Article from 'components/Article'


export const query = graphql`
  query($id: String!, $nextId: String, $prevId: String) {
    article: contentfulArticle(id: { eq: $id }) {
      id
      title
      # variables {
      #   key
      #   value
      # }
      hero {
        id
        title
        description
        file {
          url
        }
      }
      summary {
        id
        summary
      }
      content {
        childMarkdownRemark {
          html
        }
      }
      author {
        id
        firstName
        lastName
        shortTitle
        description {
          text: description
        }
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
        facebookHandle
        twitterHandle
        instagramHandle
        linkedinHandle
        emailAddress
      }
      category {
        name
      }
      publishedOn
      updatedOn
      tags {
        name
      }
    }
    categories: allContentfulCategory {
      ...SideBarFragment
    }
    prev: contentfulArticle(id: { eq: $prevId }) {
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
    next: contentfulArticle(id: { eq: $nextId }) {
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
  }
`

const parseHeroImgMeta = hero => {
  const dim = 1000
  const dim2x = dim * 2
  return {
    alt: hero.title,
    title: hero.title,
    src: `${hero.file.url}?w=${dim}&h=${dim}&q=70`,
    srcSet: `${hero.file.url}?w=${dim2x}&h=${dim2x}&q=70 2x`,
  }
}

export default compose(
  withProps(props => ({
    instagram: props.pageContext.instagram ? props.pageContext.instagram.data : [], 
  })),
  withProps(({data: {article}}) => ({
    meta: {
      title: `Omid Ahourai's Blog | ${article.title}`,
      meta: [
        { name: 'description', content: `${article.summary.summary}` },
        {
          name: 'keywords',
          content: article.tags.map(({ name }) => name).join(', '),
        },
        { property: 'og:site_name', content: `Blog - Omid Ahourai` },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: article.title },
        { property: 'og:description', content: article.summary.summary },
        {
          property: 'og:url',
          content: `http://www.omid.com/${lowerFirst(article.category.name)}/${article.slug}`,
        },
        {
          property: 'og:image',
          content: `http:${article.hero.file.url}?w=1200&h=630&q=70`,
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: article.title },
        { name: 'twitter:description', content: article.summary.summary },
        {
          name: 'twitter:url',
          content: `http://www.omid.com/${lowerFirst(article.category.name)}/${article.slug}`,
        },
        { name: 'twitter:image', content: `http:${article.hero.file.url}?w=1200&q=70` },
        { name: 'twitter:label1', content: 'Written by' },
        {
          name: 'twitter:data1',
          content: `${article.author.firstName} ${article.author.lastName}`,
        },
        { name: 'twitter:label2', content: 'Filed under' },
        { name: 'twitter:data2', content: article.category.name },
      ],
    }
  })),
  withProps(({data: {article}}) => ({
    article,
    heroImageMeta: parseHeroImgMeta(article.hero),
    category: {
      ...article.category,
      url: `/${lowerFirst(article.category.name)}/`
    },
    author: {
      ...article.author,
      fullName: `${article.author.firstName} ${article.author.lastName}`,
    },
    theme: article.variables && article.variables.find(({key, value}) => key === 'theme' && value === 'dark')
      ? { // dark
        bg: '#333',
        color: '#FFF',
      } : { // light (default)
        bg: '#FFF',
        color: '#454545',
      },
  })),
  withProps(({data}) => ({
    prev: data.prev,
    next: data.next,
  })),
)(Article)